import React from 'react'

import {createDrawerNavigator} from '@react-navigation/drawer'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealsDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import colors from '../consts/colors'
import {Ionicons} from '@expo/vector-icons'

// const defaultStackNavOptions = {
//    headerStyle: {
//       backgroundColor: colors.primary
//    },
//    headerTitleStyle: {
//       fontWeight: 'bold'
//    },
//    headerTintColor: 'white'
// }

const Stack = createNativeStackNavigator()

const MealsNavigator = () => {
   return (
      <Stack.Navigator screenOptions={{}}>
         <Stack.Screen name="Categories" component={CategoriesScreen} />
         <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
         <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
   )
}

const Favorites = createNativeStackNavigator()

const FavoritesNavigator = () => {
   return (
      <Stack.Navigator screenOptions={{}}>
         <Favorites.Screen name="FavoritesTab" component={FavoritesScreen} />
         <Favorites.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
   )
}

const Tab = createBottomTabNavigator()

const MealsNavigationTab = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen
            name="Meals"
            component={MealsNavigator}
            // options={{
            //    tabBarIcon: ({color}) => (
            //       <Ionicons name={'ios-restaurant'} size={25} color={color} />
            //    ),
            //    tabBarColor: colors.primary
            // }}
         />
         <Tab.Screen
            name="Favorites"
            component={FavoritesNavigator}
            // options={{
            //    tabBarIcon: ({color}) => (
            //       <Ionicons name={'ios-star'} size={25} color={color} />
            //    ),
            //    tabBarColor: colors.accent
            // }}
         />
      </Tab.Navigator>
   )
}

const FiltersNavigation = () => {
   return (
      <Stack.Navigator screenOptions={{}}>
         <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
      </Stack.Navigator>
   )
}

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
   return (
      <Drawer.Navigator
      //  screenOptions={{
      //     headerShown: false,
      //     drawerActiveBackgroundColor: colors.primary,
      //     drawerActiveTintColor: 'white',
      //     drawerContentStyle: {
      //        backgroundColor: colors.opacityPrimary,
      //        paddingVertical: 25,
      //        paddingHorizontal: 10
      //     }
      //  }}
      >
         <Drawer.Screen
            name="MealFavorites"
            component={MealsNavigationTab}
            // options={{
            //    title: 'Meals'
            // }}
         />
         <Drawer.Screen
            name="Filters"
            component={FiltersNavigation}
            // options={{}}
         />
      </Drawer.Navigator>
   )
}

export default DrawerNavigator
