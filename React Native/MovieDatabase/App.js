import { View } from "react-native";
import React from "react";
import Movies from "./components/Movies";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetails from "./components/MovieDetails";
import darkTheme from "@react-navigation/native/src/theming/DarkTheme";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={darkTheme}>
      <View>
        <StatusBar style="light"></StatusBar>
      </View>
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Movie Details" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
