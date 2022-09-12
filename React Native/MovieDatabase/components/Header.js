import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
