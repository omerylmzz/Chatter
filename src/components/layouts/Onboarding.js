import React from "react";
import { View, StyleSheet, FlatList, useWindowDimensions, Image, Text, Dimensions } from "react-native";
import Colors, { darkColors } from "../styles/Colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width: SCREEN_WIDTH} = Dimensions.get("window");
const Onboarding = ({image, title, description}) => {

  const {width} = useWindowDimensions();

  return(
    <View style={[darkStyles.container, {width}]}>
      <Image
        source={image}
        style={[darkStyles.image, {width, resizeMode: "contain"}]}
      />
      <View>
        <Text style={darkStyles.title}>
          {title}
        </Text>
        <Text style={darkStyles.description}>
          {description}
        </Text>
      </View>
    </View>
  )
}

const darkStyles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
    justifyContent: "center",
    resizeMode: "contain"
  },
  title:{
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: darkColors.lightOrange,
    textAlign:'center'
  },
  description:{
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 64,
  }
})

export default Onboarding;
