import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: "Arial",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Header;
