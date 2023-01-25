import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const ConfirmButton = ({title, onPress, containerStyle}) => {
   return (
      <TouchableOpacity
         style={[styles.confirmDefault, containerStyle]}
         onPress={onPress}>
         <Text>{title}</Text>
      </TouchableOpacity>
   )
}
const CancelButton = ({title, onPress, containerStyle}) => {
   return (
      <TouchableOpacity style={containerStyle} onPress={onPress}>
         <Text>{title}</Text>
      </TouchableOpacity>
   )
}

export {ConfirmButton, CancelButton}

const styles = StyleSheet.create({
   confirmDefault: {
      backgroundColor: 'red'
   }
})
