import {View, Text, StyleSheet, Switch} from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'
import colors from '../consts/colors'
import {GlobalState} from '../context'
import {useSelector, useDispatch} from 'react-redux'
const LIGHT = 'light'
const DARK = 'dark'

import {toggleTheme} from '../store/themeSlice'

const ThemeManagement = () => {
   // const {theme, toggleTheme} = useContext(GlobalState)

   const {theme} = useSelector((root) => root)
   const dispatch = useDispatch()

   const toggleSwitch = () => dispatch(toggleTheme())

   return (
      <View style={st.container}>
         <Text>{theme} Theme Enabled</Text>
         <Switch onValueChange={toggleSwitch} value={theme === LIGHT} />

         <FirstChild />
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
   const {theme} = useSelector((root) => root)

   return (
      <View
         style={{
            backgroundColor: theme === LIGHT ? 'white' : colors.gray,
            height: 80,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center'
         }}>
         <Text style={{color: theme === 'light' ? 'black' : 'white'}}>
            I am nested child
         </Text>
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
