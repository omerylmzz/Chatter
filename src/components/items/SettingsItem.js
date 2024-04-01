import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../styles/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const {width,height} = Dimensions.get('window');
const SettingsItem = ({icon, text, textColor, colorEndIcon, colorStartIcon, pressFunction}) => {
  return(
    <View>
      <Pressable style={darkStyles.container} onPress={pressFunction}>
        <View style={darkStyles.body}>
          <Icon name={icon} color={colorStartIcon} size={24}/>
          <Text style={[darkStyles.text, {color:textColor}]}>
            {text}
          </Text>
        </View>
        <View style={{marginHorizontal:10}}>
          <Icon name="chevron-right" color={colorEndIcon} size={24}/>
        </View>
      </Pressable>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    backgroundColor:Colors.secondaryBlack,
    width:'98%',
    height:height*0.07,
    marginVertical:3,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center'
  },
  body:{
    flex:1,
    flexDirection:'row',
    marginHorizontal:10,
    alignItems:'center',
  },
  text:{
    fontSize:18,
    color:'white',
    paddingHorizontal:10
  }
})

export default SettingsItem;
