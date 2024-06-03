// MyApp/src/App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store/configureStore";
import QuerySettingsScreen from "./src/components/Pages/QuerySettingsScreen";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <BottomTabNavigator /> */}
        <Stack.Navigator initialRouteName="QuerySettings">
          <Stack.Screen name="QuerySettings" component={QuerySettingsScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="HomeScreen" component={BottomTabNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
