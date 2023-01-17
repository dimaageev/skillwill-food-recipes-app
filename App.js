import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './navigation/MealsNavigator'
import {enableScreens} from 'react-native-screens'

enableScreens()

export default function App() {
   return (
      <NavigationContainer>
         <DrawerNavigator />
      </NavigationContainer>
   )
}
