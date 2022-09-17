import { View, StyleSheet } from "react-native";
import React from "react";
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
