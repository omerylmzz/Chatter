import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const HomeHeader = ({pressFunction, groupName}) => {
  return(
    <View style={darkStyles.container}>
      <Text style={darkStyles.title}>
        chetter
      </Text>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    backgroundColor:Colors.secondaryBlack,
    width:'100%',
    height:60,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    color:'white',
    fontFamily:'budidaya',
    fontSize:32
  }
})

export default HomeHeader;
