import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useEffect, useState} from 'react'

import colors from '../consts/colors'

const Button = ({title, onPress}) => {
   return (
      <TouchableOpacity
         style={{backgroundColor: colors.primary}}
         onPress={onPress}>
         <Text style={{marginVertical: 8, marginHorizontal: 16, fontSize: 24}}>
            {title}
         </Text>
      </TouchableOpacity>
   )
}

export default Button
