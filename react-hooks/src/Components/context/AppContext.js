import React, { createContext } from 'react'
const context = createContext();
const AppContext = ({children}) => {
    const quality = "kind";
  return (
    <context.Provider value={{quality}}>{children}</context.Provider>
  )
}

export default AppContext