import React, {useEffect, useState} from 'react'

import {ActivityIndicator, FlatList, StyleSheet, Text, View} from 'react-native'
import CategoryGridItem from '../components/CategoryGridItem'
import {CATEGORIES} from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {getCategorys} from '../store/categorySlice'

const CategoriesScreen = (props) => {
   const {categorys, isLoading, error} = useSelector((state) => state.category)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCategorys())
   }, [dispatch])
   if (isLoading) {
      return (
         <View
            style={{flex: 1, justifyContent: 'center', backgroundColor: 'red'}}>
            <Text>ISLOADING</Text>
            <ActivityIndicator size={'large'} color={'black'} />
         </View>
      )
   }
   if (error) {
      return <Text>ERROR</Text>
   }
   const renderGridItem = (itemData) => {
      return (
         <CategoryGridItem
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
               props.navigation.navigate('CategoryMeals', {
                  categoryId: itemData.item.id,
                  title: itemData.item.title
               })
            }}
         />
      )
   }
   return (
      <FlatList data={categorys} renderItem={renderGridItem} numColumns={2} />
   )
}

const styles = StyleSheet.create({
   gridItem: {
      flex: 1,
      margin: 15,
      height: 150
   }
})

export default CategoriesScreen
