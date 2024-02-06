import React, { createContext } from 'react'



interface DatabaseLoadingInterface{
    loadNews: () => [];

}


const DatabaseLoadingContext = createContext<undefined | DatabaseLoadingInterface>(undefined)


const DatabaseLoadingContextProvider = () => {
  return (
    <div>DatabaseLoadingContext</div>
  )
}

export default DatabaseLoadingContextProvider;