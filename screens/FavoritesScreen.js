import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'

const FavoritesScreen = (props) => {
   //    React.useLayoutEffect(() => {
   //       props.navigation.setOptions({
   //          headerTitle: 'Your Favorites',
   //          headerLeft: () => (
   //             <HeaderButton
   //                iconName="ios-menu-outline"
   //                onPress={() => {
   //                   props.navigation.toggleDrawer()
   //                }}
   //             />
   //          )
   //       })
   //    }, [props.navigation])

   // if (favoriteMeals.length === 0 || !favoriteMeals) {
   //    return (
   //       <View style={styles.content}>
   //          <Text>No favorite meals found. Add some 🍔 🍕 🌭 🍟</Text>
   //       </View>
   //    )
   // }

   return <MealList listData={[]} navigation={props.navigation} />
}

const styles = StyleSheet.create({
   content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

export default FavoritesScreen
