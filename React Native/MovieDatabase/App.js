import { View, StyleSheet } from "react-native";
import React from "react";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieScreen from "./components/MovieScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={HomeScreen} />
        <Stack.Screen name="MovieScreen" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
