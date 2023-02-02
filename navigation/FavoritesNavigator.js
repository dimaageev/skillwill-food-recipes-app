import {createNativeStackNavigator} from '@react-navigation/native-stack'

import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealsDetailsScreen'
import defaultScreenNavigationProps from './MealsNavigator'

const Stack = createNativeStackNavigator()

export const FavoritesNavigator = () => {
   return (
      <Stack.Navigator screenOptions={defaultScreenNavigationProps}>
         <Stack.Screen name="FavoritesTab" component={FavoritesScreen} />
         <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
   )
}
