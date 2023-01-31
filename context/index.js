import {View, Text} from 'react-native'
import React from 'react'

const LIGHT = 'light'
const DARK = 'dark'

const initialState = DARK
export const GlobalState = React.createContext(initialState)

const Context = ({children}) => {
   const [currentState, setGlobalState] = React.useState(initialState)

   const toggleTheme = () =>
      setGlobalState((prev) => (prev === LIGHT ? DARK : LIGHT))

   return (
      <GlobalState.Provider
         value={{theme: currentState, toggleTheme: toggleTheme}}>
         {children}
      </GlobalState.Provider>
   )
}

export default Context
