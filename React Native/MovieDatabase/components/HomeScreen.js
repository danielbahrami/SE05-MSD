import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header title={"Movies"}></Header>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default HomeScreen;
