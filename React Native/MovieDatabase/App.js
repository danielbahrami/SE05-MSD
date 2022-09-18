import { View, StyleSheet } from "react-native";
import React from "react";
import Movies from "./components/Movies";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetails from "./components/MovieDetails";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Movie Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
