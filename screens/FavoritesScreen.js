import React from 'react'
import {
   View,
   Text,
   StyleSheet,
   Platform,
   Button,
   ActionSheetIOS
} from 'react-native'
import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList'
import {CancelButton, ConfirmButton} from '../components/Buttons'

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

   const onPress = () => {
      Platform.OS === 'ios'
         ? ActionSheetIOS.showActionSheetWithOptions(
              {
                 options: ['Cancel', 'Generate number', 'Reset'],
                 destructiveButtonIndex: 2,
                 cancelButtonIndex: 0,
                 userInterfaceStyle: 'dark'
              },
              (buttonIndex) => {}
           )
         : console.log('i cant')
   }
   return (
      <View style={styles.content}>
         <Button title="Press me" />
         <Button title="Press me" />
         <Button title="Press me" />
         <CancelButton containerStyle={styles.CancelStyle} title={'Cancel'} />
         <ConfirmButton containerStyle={styles.CancelStyle} title={'Confirm'} />
         {/* {Platform.OS === 'ios' ? <Text>IOS</Text> : <Text>Andrid</Text>} */}
         {/* <MealList listData={[]} navigation={props.navigation} /> */}
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
            backgroundColor: 'red'
         },
         android: {
            backgroundColor: 'blue'
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
