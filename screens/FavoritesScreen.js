import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Platform, Text} from 'react-native'
import MealList from '../components/MealList'
import {useSelector} from 'react-redux'

const FavoritesScreen = (props) => {
   const {meals: favoriteMeals} = useSelector((state) => state.fav)
   React.useLayoutEffect(() => {
      props.navigation.setOptions({
         headerTitle: 'Your Favorites'
      })
   }, [props.navigation])

   if (favoriteMeals.length === 0 || !favoriteMeals) {
      return (
         <View style={styles.content}>
            <Text>No favorite meals found. Add some 🍔 🍕 🌭 🍟</Text>
         </View>
      )
   }

   return (
      <View style={styles.content}>
         <MealList listData={favoriteMeals} navigation={props.navigation} />
      </View>
   )
}

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      ...Platform.select({
         ios: {
            backgroundColor: '#fff'
         },
         android: {
            backgroundColor: '#fff'
         }
      })
   },
   CancelStyle: {
      borderWidth: 1,
      borderColor: 'blue',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 50
   }
})

export default FavoritesScreen
