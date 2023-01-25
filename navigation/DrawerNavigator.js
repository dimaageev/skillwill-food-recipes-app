import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabNavigator from './TabNavigator/TabNavigator'
import FiltersNavigation from './FiltersNavigation'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            headerShown: false,
         }}>
         <Drawer.Screen name="MealFavorites" component={BottomTabNavigator} />
         <Drawer.Screen name="Filters" component={FiltersNavigation} />
      </Drawer.Navigator>
   )
}

export default DrawerNavigator
