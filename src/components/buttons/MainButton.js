import React from "react";
import { ActivityIndicator, Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import { darkColors } from "../styles/Colors";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const MainButton = ({mode, text, loading, onPress}) => {
  return(
    <View style={{overflow: "hidden", borderRadius: 10}}>
      {
        mode ?
          <Pressable style={[styles.container, {backgroundColor: darkColors.lightOrange}]} onPress={onPress} android_ripple={{color: darkColors.darkOrange}}>
            {
              !loading ? <Text style={styles.text}>{text}</Text> : <ActivityIndicator size="small" color={darkColors.white} animating={loading}/>
            }
          </Pressable>
          :
          <Pressable style={styles.container} onPress={onPress} android_ripple={{color: darkColors.darkPurple}}>
            {
              !loading ? <Text style={styles.text}>{text}</Text> : <ActivityIndicator size="small" color={darkColors.white} animating={loading}/>
            }
          </Pressable>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    overflow: "hidden",
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.06,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkColors.lightPurple,
    borderRadius: 10
  },
  text:{
    fontWeight: "bold",
    fontSize: 18,
    color: darkColors.white
  }
})

export default MainButton;
