import React from "react";
import { View, StyleSheet, Pressable, Text, TouchableOpacity } from "react-native";
import { darkColors } from "../styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const MessageHeader = ({pressFunction, groupName}) => {
  return(
    <View style={darkStyles.container}>
      <View>
        <TouchableOpacity onPress={pressFunction} activeOpacity={0.5}>
          <Ionicons name="arrow-back" color="white" size={24}/>
        </TouchableOpacity>
      </View>
      <View style={darkStyles.header}>
        <Text style={darkStyles.title}>
          {groupName}
        </Text>
      </View>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    backgroundColor: darkColors.secondary,
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10
  },
  title:{
    fontWeight: "bold",
    color: darkColors.white,
    fontSize: 24,
  },
  header:{
    marginHorizontal: 15
  }
})

export default MessageHeader;
