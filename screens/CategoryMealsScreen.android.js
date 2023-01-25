import React from 'react'
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
import {CATEGORIES} from '../data/dummy-data'

const CategoryMealsScreen = (props) => {
   const {categoryId} = props.route.params

   //    React.useLayoutEffect(() => {
   //       props.navigation.setOptions({
   //          headerTitle: selectedCategory.title
   //       })
   //    }, [props.navigation])

   // return <MealList listData={[]} navigation={props.navigation} />
   return (
      <View style={styles.content}>
         <Text>Meals Category Android</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default CategoryMealsScreen
