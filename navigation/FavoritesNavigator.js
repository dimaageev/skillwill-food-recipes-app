import {createNativeStackNavigator} from '@react-navigation/native-stack'

import FavoritesScreen from '../screens/FavoritesScreen'
import MealDetailsScreen from '../screens/MealsDetailsScreen'

const Stack = createNativeStackNavigator()

export const FavoritesNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="FavoritesTab" component={FavoritesScreen} />
         <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
   )
}
