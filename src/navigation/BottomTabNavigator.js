// BottomTabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import UserStack from "./UserStack";
import HomeStack from "./HomeStack";
import CategoriesStack from "./CategoriesStack";
import QuerySettingsScreen from "../components/Pages/QuerySettingsScreen"
import OrderStack from "./OrderStack";
const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#AD1357",
        tabBarStyle: { display: "flex" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-sharp" type="ionicon" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Categories"
        component={CategoriesStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="grid-sharp" type="ionicon" color={color} size={size} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Search"
        component={QuerySettingsScreen} // Set QuerySettingsScreen as the component for the Search tab
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="ionicon" color={color} size={size} /> // You can use a search icon here
          ),
        }}
      />


      <Tab.Screen
        name="Order"
        component={OrderStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="receipt-sharp"
              type="ionicon"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="person-sharp"
              type="ionicon"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
