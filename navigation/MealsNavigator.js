import {createNativeStackNavigator} from '@react-navigation/native-stack'
import colors from '../consts/colors'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailsScreen from '../screens/MealsDetailsScreen'

const Stack = createNativeStackNavigator()

export const defaultScreenNavigationProps = {
   headerStyle: {
      backgroundColor: colors.primary
   },
   headerTitleStyle: {
      fontWeight: 'bold'
   },
   headerTintColor: 'white'
}

export const MealsNavigator = () => {
   return (
      <Stack.Navigator screenOptions={defaultScreenNavigationProps}>
         <Stack.Screen name="Categories" component={CategoriesScreen} />
         <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
         <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
      </Stack.Navigator>
   )
}
