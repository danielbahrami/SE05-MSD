import { View, StyleSheet } from "react-native";
import React from "react";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieScreen from "./components/MovieScreen";

const App = () => {
  return (
    <View>
      <HomeScreen></HomeScreen>
    </View>
  );
};


export default App;
