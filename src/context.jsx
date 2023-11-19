import React, { useState, createContext } from 'react'

export const themeContext = createContext()
export default function Context({children}) {
    const [dark,setdark] = useState(false)
  return (
    <themeContext.Provider value={{dark,setdark}}>
        {children}
    </themeContext.Provider>
  )
}
