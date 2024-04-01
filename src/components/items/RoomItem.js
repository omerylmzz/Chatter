import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../styles/Colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



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
    backgroundColor:Colors.secondaryBlack,
    width:'98%',
    height:hp('11%'),
    marginVertical:3,
    alignSelf:'center',
    alignItems:'center',
    borderRadius:10,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  textBox:{
    paddingHorizontal:10,
  },
  description:{
    color:Colors.primaryGrey,
    fontSize:14,
    marginBottom:5
  },
  title:{
    color:'white',
    fontSize:24,
    fontFamily:'coolvetica',
    marginBottom:5
  },
  button:{
    backgroundColor:Colors.primaryPurple,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    paddingVertical:2,
    paddingHorizontal:5
  },
  btnText:{
    color:'white',
    fontFamily:'bebas',
    fontSize:16,
    paddingVertical:5,
    paddingHorizontal:20
  }
})

export default RoomItem;
