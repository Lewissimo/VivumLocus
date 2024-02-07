import React, { Dispatch, DispatchWithoutAction, ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import { apiURL } from '../../../AuthContext';
import { ContactAction, contactLayout, contactReducerEnum } from './ContactActions';
import { contactReducer } from './ContactLoader';


const fetchData = async (limit: number) => {
    const response = await fetch(`${apiURL}/news/loadnews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ limit }),
    });
    const data = await response.json();
    return data;
  };
  


export const ContactDispatchContext = createContext<Dispatch<ContactAction> | undefined>(undefined);
export const ContactStateContext = createContext<contactLayout[] | undefined>(undefined);


const ContactContextProvider = ({children} : {children : ReactNode}) => {
    const [initialState, setInitialState] = useState<contactLayout[] | undefined>(undefined)
    const [state, dispatch] = useReducer<React.Reducer<contactLayout[] | undefined, ContactAction>>(contactReducer, initialState);
    
    useEffect(()=>{
      
      fetchData(10)
      .then((data) => {
        dispatch({ type: contactReducerEnum.SET, payload: data });
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
    <ContactStateContext.Provider value={state}>
      <ContactDispatchContext.Provider value={dispatch}>
        {children}
      </ContactDispatchContext.Provider>
    </ContactStateContext.Provider>
  );

};

export default ContactContextProvider