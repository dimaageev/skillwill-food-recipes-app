import {View, Text, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'

const StateManagement = () => {
   const [state, setState] = useState(0)

   const inc = () => setState((prev) => prev + 1)
   const dec = () => setState((prev) => prev - 1)

   return (
      <View
         style={[
            StyleSheet.absoluteFill,
            {
               marginHorizontal: 28,
               alignItems: 'center',
               justifyContent: 'center'
            }
         ]}>
         <Button title={'-'} onPress={dec} />
         <Text>{state}</Text>
         <Button title={'+'} onPress={inc} />
      </View>
   )
}

export default StateManagement
