import FiltersScreen from '../screens/FiltersScreen'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const FiltersNavigation = () => {
   return (
      <Stack.Navigator screenOptions={{}}>
         <Stack.Screen name="FiltersScreen" component={FiltersScreen} />
      </Stack.Navigator>
   )
}

export default FiltersNavigation
