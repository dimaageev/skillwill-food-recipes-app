import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabNavigator from './TabNavigator/TabNavigator'
import FiltersNavigation from './FiltersNavigation'
import colors from '../consts/colors'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: colors.primary,
            drawerActiveTintColor: 'white',
            drawerContentStyle: {
               backgroundColor: colors.primary,
               paddingHorizontal: 25,
               paddingVertical: 20
            }
         }}>
         <Drawer.Screen name="MealFavorites" component={BottomTabNavigator} />
         <Drawer.Screen name="Filters" component={FiltersNavigation} />
      </Drawer.Navigator>
   )
}

export default DrawerNavigator
