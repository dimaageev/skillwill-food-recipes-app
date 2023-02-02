import React, {useEffect, useState} from 'react'

import {
   View,
   Text,
   StyleSheet,
   Platform,
   Button,
   DatePickerIOSBase,
   DatePickerIOSComponent,
   TextInput
} from 'react-native'
import MealList from '../components/MealList'
import {CATEGORIES, MEALS} from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
   const {categoryId, title} = props.route.params
   const [Data, setData] = useState([])
   React.useLayoutEffect(() => {
      props.navigation.setOptions({
         headerTitle: title
      })
   }, [props.navigation])

   React.useEffect(() => {
      const array = MEALS.filter((e) => e.categoryIds.includes(categoryId))
      setData(array)
   }, [props.route.params])

   return <MealList listData={Data} navigation={props.navigation} />
}

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default CategoryMealsScreen
