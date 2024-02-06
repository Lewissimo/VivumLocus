import React, { Dispatch, DispatchWithoutAction, ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import { newsReducer } from './NewsLoader';
import { NewsAction, newsLayout, newsReducerEnum } from './NewsActions';
import { apiURL } from '../../../AuthContext';


const fetchData = async (limit: number) => {
    const response = await fetch(`${apiURL}/news/loadnews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ limit }),
    });
    const data = await response.json();
    return data;
  };
  


export const NewsDispatchContext = createContext<Dispatch<NewsAction> | undefined>(undefined);
export const NewsStateContext = createContext<newsLayout[] | undefined>(undefined);


const NewsContextProvider = ({children} : {children : ReactNode}) => {
    const [initialState, setInitialState] = useState<newsLayout[] | undefined>(undefined)
    const [state, dispatch] = useReducer<React.Reducer<newsLayout[] | undefined, NewsAction>>(newsReducer, initialState);
    
    useEffect(()=>{
      
      fetchData(10)
      .then((data) => {
        dispatch({ type: newsReducerEnum.SET, payload: data });
        })
        .catch((error) => {
          console.error('Błąd podczas pobierania danych:', error);
        }); 
    }
    , [])
    useEffect(() => {
      console.log(state);
    }, [state]);
    
    return (
    <NewsStateContext.Provider value={state}>
      <NewsDispatchContext.Provider value={dispatch}>
        {children}
      </NewsDispatchContext.Provider>
    </NewsStateContext.Provider>
  );

};

export default NewsContextProvider