import {StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import Button from '../components/Button'
import colors from '../consts/colors'

const store = {value: 0}

const ImmutableState = () => {
   return (
      <View style={st.container}>
         <Button
            onPress={() => {
               store.value = store.value + 1
            }}
            title="change state"
         />

         <Child value={store.value} />
      </View>
   )
}

export default ImmutableState

const Child = ({value}) => {
   return (
      <View style={st.childContainer}>
         <Text>{value}</Text>
      </View>
   )
}

const st = StyleSheet.create({
   childContainer: {
      height: 200,
      width: 200,
      marginTop: 8,
      backgroundColor: colors.yellow,
      justifyContent: 'center',
      alignItems: 'center'
   },
   container: {
      marginHorizontal: 28,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
   }
})
