import {createDrawerNavigator} from '@react-navigation/drawer'
import BottomTabNavigator from './TabNavigator/TabNavigator'
import FiltersNavigation from './FiltersNavigation'
import StateManagement from '../screens/StateManagement'
import ThemeManagement from '../screens/ThemeManagement'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
   return (
      <Drawer.Navigator
         screenOptions={{
            headerShown: false
         }}
         initialRouteName="Theme">
         <Drawer.Screen
            name="MealFavorites"
            component={BottomTabNavigator}
            options={{drawerLabel: 'Meals'}}
         />
         <Drawer.Screen name="Filters" component={FiltersNavigation} />
         <Drawer.Screen name="State" component={StateManagement} />
         <Drawer.Screen name="Theme" component={ThemeManagement} />
      </Drawer.Navigator>
   )
}

export default DrawerNavigator
