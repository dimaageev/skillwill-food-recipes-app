import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import MealList from '../components/MealList'
import {CATEGORIES} from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
   const {categoryId} = props.route.params

   //    React.useLayoutEffect(() => {
   //       props.navigation.setOptions({
   //          headerTitle: selectedCategory.title
   //       })
   //    }, [props.navigation])

   return <MealList listData={[]} navigation={props.navigation} />
}

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default CategoryMealsScreen
