import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MealsNavigator} from './MealsNavigator'
import {FavoritesNavigator} from './FavoritesNavigator'
import {Text, View} from 'react-native'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen name="Meals" component={MealsNavigator} />
         <Tab.Screen name="Favorites" component={FavoritesNavigator} />
      </Tab.Navigator>
   )
}

export default BottomTabNavigator
