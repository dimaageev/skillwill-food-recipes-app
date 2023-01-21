import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealsDetailsScreen'

const Stack = createNativeStackNavigator()

export const MealsNavigator = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen name="Categories" component={CategoriesScreen} />
         <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
         <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
   )
}
