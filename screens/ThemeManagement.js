import {View, Text, StyleSheet, Switch} from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'
import colors from '../consts/colors'

const LIGHT = 'light'
const DARK = 'dark'

const ThemeManagement = () => {
   const [theme, setTheme] = useState(LIGHT)

   const toggleSwitch = () =>
      setTheme((prev) => (prev === LIGHT ? DARK : LIGHT))

   return (
      <View style={st.container}>
         <Text>{theme} Theme Enabled</Text>
         <Switch onValueChange={toggleSwitch} value={theme === LIGHT} />

         {/* <FirstChild /> */}
      </View>
   )
}

export default ThemeManagement

const FirstChild = () => {
   return (
      <View style={st.childContainer}>
         <SecondChild />
      </View>
   )
}

const SecondChild = () => {
   return (
      <View
         style={{
            backgroundColor: colors.gray, //theme === LIGHT ? 'white' : colors.gray,          style={{color: theme === 'light' ? 'black' : 'white'}}
            height: 80,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center'
         }}>
         <Text style={{color: 'white'}}>I am nested child</Text>
      </View>
   )
}

const st = StyleSheet.create({
   container: {
      marginHorizontal: 28,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
   },
   childContainer: {
      height: 200,
      width: 200,
      marginTop: 8,
      backgroundColor: colors.yellow,
      justifyContent: 'center',
      alignItems: 'center'
   },
   secondContainer: {}
})
