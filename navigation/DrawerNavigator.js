import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabNavigator from './TabNavigator/TabNavigator'
import FiltersNavigation from './FiltersNavigation'
import StateManagement from '../screens/StateManagement'
import ThemeManagement from '../screens/ThemeManagement'
import ImmutableState from '../screens/ImmutableState'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            headerShown: false
         }}
         initialRouteName="Immutable">
         <Drawer.Screen
            name="MealFavorites"
            component={BottomTabNavigator}
            options={{drawerLabel: 'Meals'}}
         />
         <Drawer.Screen name="Filters" component={FiltersNavigation} />
      </Drawer.Navigator>
   )
}

export default DrawerNavigator
