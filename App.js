import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {DrawerNavigator} from './navigation'

export default function App() {
   return (
      <NavigationContainer>
         <DrawerNavigator />
      </NavigationContainer>
   )
}
