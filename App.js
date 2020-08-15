import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screen/LoginScreen";

const images = [
  {
    id: 1,
    height: 800,
    url:
      "https://cdn.sparesinmotion.com/sites/default/files/test-product-test.png",
  },
  {
    id: 2,
    height: 8000,
    url:
      "https://wl-brightside.cf.tsp.li/resize/728x/jpg/7eb/51c/0563055842a00791915d20e970.jpg",
  },
];
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //  alignItems: "center",
    //  justifyContent: "center",
  },
});
