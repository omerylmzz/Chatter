import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { darkColors } from "../styles/Colors";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

const RoomItem = ({title, description, buttonText, pressFunction}) => {
  return(
    <View style={darkStyles.container}>
      <View style={darkStyles.textBox}>
        <Text style={darkStyles.description}>
          {description}
        </Text>
        <Text style={darkStyles.title}>
          {title}
        </Text>
      </View>
      <View style={{marginHorizontal:10}}>
        <Pressable style={darkStyles.button} onPress={pressFunction}>
          <Text style={darkStyles.btnText}>
            JOIN
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    flexDirection: "row",
    width: "98%",
    height: SCREEN_HEIGHT * 0.11,
    justifyContent:'space-between',
    alignSelf:'center',
    alignItems:'center',
    backgroundColor: darkColors.secondary,
    marginVertical: 3,
    borderRadius: 10,
  },
  textBox:{
    paddingHorizontal: 10,
  },
  description:{
    color: darkColors.description,
    fontSize: 14,
    marginBottom: 5
  },
  title:{
    fontSize:24,
    fontFamily: "coolvetica",
    color: darkColors.white,
    marginBottom:5
  },
  button:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkColors.lightPurple,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5
  },
  btnText:{
    fontFamily: "bebas",
    fontSize: 16,
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 20
  }
})

export default RoomItem;
