import React, { createContext } from 'react'
export const context = createContext();
const AppContext = ({children}) => {
    const quality = "kind";
    const name = "Nader";
    const person = {
        name : "Saber",
        job : "Shopkeeper",
        age : 34,
        address : "Near Layyah Sugar Mills",
    }
  return (
    <context.Provider value={{quality,name,person}}>{children}</context.Provider>
  )
}

export default AppContext