import React from 'react'
import {StyleSheet, View, FlatList, Text} from 'react-native'
import MealItem from './MealItem'

const MealList = (props) => {
   //    const renderMealItem = (itemData) => {
   //       return (
   //          <MealItem
   //             title={itemData.item.title}
   //             duration={itemData.item.duration}
   //             complexity={itemData.item.complexity}
   //             affordability={itemData.item.affordability}
   //             image={itemData.item.imageUrl}
   //             onSelectMeal={() => {
   //                props.navigation.navigate('MealDetails', {
   //                   mealId: itemData.item.id,
   //                   title: itemData.item.title
   //                })
   //             }}
   //          />
   //       )
   //    }

   return (
      <View style={styles.screen}>
         <Text style={{alignSelf: 'center'}}> Favorites </Text>
         {/* <FlatList
            data={props.listData}
            renderItem={renderMealItem}
            style={{width: '100%'}}
         /> */}
      </View>
   )
}

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
   }
})

export default MealList
