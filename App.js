import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducer from "./store/reducers/meals";
import DrawerNavigator from "./navigation/MealsNavigator";
import { enableScreens } from "react-native-screens";

const rootReducer = combineReducers({
  meals: mealsReducer,
});
const store = createStore(rootReducer);

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
}
