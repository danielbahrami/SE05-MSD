import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";

const HomeScreen = () => {
  return (
    <View>
      <Header title={"Movies"}></Header>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
