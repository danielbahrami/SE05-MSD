import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = ({ title, size, color }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "Arial",
          fontWeight: "bold",
          fontSize: size,
          color: color,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
