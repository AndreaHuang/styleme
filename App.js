import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "./screen/AccountScreen";
import FeedScreen from "./screen/FeedScreen";
import StylingScreen from "./screen/StylingScreen";
import CartScreen from "./screen/CartScreen";
import color from "./config/color";
import LookDetailsScreen from "./screen/LookDetailsScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: color.primary,
        activeTintColor: color.white,
        inactiveBackgroundColor: color.white,
        inactiveTintColor: color.dark,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                color={color}
                name="apple-safari"
                size={size}
              />
            );
          },
        }}
        name="Styling"
        component={StylingScreen}
      />
      <Tab.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons color={color} name="hanger" size={size} />
            );
          },
        }}
        component={FeedScreen}
      />
      <Tab.Screen
        name="Cart"
        component={LookDetailsScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                color={color}
                name="purse-outline"
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialCommunityIcons
                color={color}
                name="account"
                size={size}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
