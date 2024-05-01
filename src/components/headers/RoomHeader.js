import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { darkColors } from "../styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const RoomHeader = () => {
  return(
    <View style={darkStyles.container}>
      <View>
        <Text style={darkStyles.title}>
          Rooms
        </Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <Pressable style={{marginHorizontal:20}}>
          <Ionicons name="search" color="white" size={20}/>
        </Pressable>
        <Pressable>
          <Ionicons name="ellipsis-vertical" color="white" size={20}/>
        </Pressable>
      </View>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    flexDirection: "row",
    width: "100%",
    height: 60,
    backgroundColor: darkColors.secondary,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  title:{
    fontWeight: "bold",
    fontSize: 24,
    color: darkColors.white,
  },

})

export default RoomHeader;
