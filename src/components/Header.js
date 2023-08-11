import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          lineHeight: 27,
          color: "#000000",
        }}
      >
        Hi Nick
      </Text>
      <Image source={require("../../assets/Ellipse-1.png")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});
