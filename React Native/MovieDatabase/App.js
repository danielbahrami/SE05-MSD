import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
