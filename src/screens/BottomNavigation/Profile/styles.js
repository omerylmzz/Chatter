import { Dimensions, StyleSheet } from "react-native";
import { darkColors } from "../../../components/styles/Colors";


const style = () => {

  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");

  return(
    StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: darkColors.background
      },
      header:{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 6,
        backgroundColor: darkColors.lightPurple
      },
      information:{
        position: "absolute",
        top: SCREEN_HEIGHT / 10,
        left: 10,
      },
      logo:{
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_WIDTH * 0.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: darkColors.lightOrange,
        borderRadius: SCREEN_WIDTH * 0.1,
        borderWidth: 2,
        borderColor: darkColors.background
      },
      text:{
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "coolvetica",
        color: darkColors.white
      }
    })
  )
}

export default style;
