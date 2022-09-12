import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./components/Header";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <Header title="Header"></Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
