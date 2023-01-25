import {MealsNavigator} from '../MealsNavigator'
import {FavoritesNavigator} from '../FavoritesNavigator'
import {Text, View} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import MyTabBar from './MyTabBar'
import {Ionicons} from '@expo/vector-icons'

const Tab = createMaterialTopTabNavigator()

const BottomTabNavigator = () => {
   return (
      <Tab.Navigator
         tabBarPosition="bottom"
         tabBar={(props) => <MyTabBar {...props} />}
         screenOptions={{headerShown: false}}>
         <Tab.Screen
            name="MealsStack"
            component={MealsNavigator}
            options={{
               title: 'Home',
               tabBarIcon: () => (
                  <Ionicons name="ios-restaurant" size={24} color="black" />
               )
            }}
         />
         <Tab.Screen
            name="FavoritesStack"
            component={FavoritesNavigator}
            options={{
               title: 'Favorites',
               tabBarIcon: () => (
                  <Ionicons name="ios-star" size={24} color="black" />
               )
            }}
         />
      </Tab.Navigator>
   )
}

export default BottomTabNavigator
