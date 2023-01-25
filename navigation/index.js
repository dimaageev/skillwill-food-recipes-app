import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
   CardStyleInterpolators,
   createStackNavigator
} from '@react-navigation/stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import {View, Text, SafeAreaView, Easing} from 'react-native'
import {useEffect, useState} from 'react'
import Category from '../models/category'

const NativeStack = createNativeStackNavigator()
const Stack = createStackNavigator()

const index = () => {
   const [Logined, setLogined] = useState(false)
   useEffect(() => {
      setTimeout(() => {
         setLogined(true)
      }, 2000)
   }, [])

   return (
      <View style={{flex: 1}}>
         {!Logined ? (
            <StackNavigatorBeforeAuth />
         ) : (
            <NativeStackNavigatorAfterAuth />
         )}
      </View>
   )
}

const NativeStackNavigatorAfterAuth = () => {
   return (
      <NativeStack.Navigator
         screenOptions={{
            // headerShown: false,
            title: 'Native Stack Screen'
         }}
         id="NativeStack"
         initialRouteName="Categories">
         <NativeStack.Screen name="Categories" component={CategoriesScreen} />
      </NativeStack.Navigator>
   )
}

const StackNavigatorBeforeAuth = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            title: 'Stack Screen'
         }}
         initialRouteName="CategoryMeals"
         id="Stack">
         <Stack.Screen
            name="CategoryMeals"
            options={{
               cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
            }}
            component={CategoryMealsScreen}
         />
      </Stack.Navigator>
   )
}

export default index
