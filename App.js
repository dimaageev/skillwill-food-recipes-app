import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {DrawerNavigator} from './navigation'
import * as React from 'react'
import {Provider} from 'react-redux'
import {store} from './store/store'

export default function App() {
   return (
      <Provider store={store}>
         <NavigationContainer>
            <DrawerNavigator />
         </NavigationContainer>
      </Provider>
   )
}
