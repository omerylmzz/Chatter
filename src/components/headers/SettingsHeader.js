import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Colors from "../styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsHeader = ({pressFunction}) => {
  return(
    <View style={darkStyles.container}>
      <View>
        <Pressable android_ripple={true} onPress={pressFunction}>
          <Ionicons name="arrow-back" color="white" size={24}/>
        </Pressable>
      </View>
      <View style={darkStyles.header}>
        <Text style={darkStyles.title}>
          Settings
        </Text>
      </View>
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
    paddingHorizontal:10
  },
  title:{
    fontWeight:'bold',
    color:'white',
    fontSize:24,
  },
  header:{
    marginHorizontal:15
  }
})

export default SettingsHeader;
