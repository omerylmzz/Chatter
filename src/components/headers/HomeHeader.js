import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { darkColors } from "../styles/Colors";

const HomeHeader = () => {
  return(
    <View style={darkStyles.container}>
      <Text style={darkStyles.title}>
        chatter
      </Text>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    flexDirection: "row",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkColors.secondary,
  },
  title:{
    fontFamily: 'budidaya',
    fontSize: 32,
    color: darkColors.white,
  }
})

export default HomeHeader;
