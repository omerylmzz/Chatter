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
      title:{
        fontSize: 20,
        fontWeight: "bold",
        color: darkColors.white,
        padding: 10
      },
      body:{
        width: SCREEN_WIDTH * 0.98,
        alignSelf: "center",
        backgroundColor: darkColors.input,
        borderRadius: 10,
        padding: 10
      },
      input:{
        width: SCREEN_WIDTH * 0.85,
        height: SCREEN_HEIGHT * 0.06,
        backgroundColor: "#2E2E2E",
        color: darkColors.white,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10
      },
      button:{
        width: SCREEN_WIDTH * 0.85,
        height: SCREEN_HEIGHT * 0.06,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: darkColors.lightPurple,
        borderRadius: 10,
        marginVertical: 5,
        marginLeft: 35
      },
      buttonText:{
        fontWeight: "bold",
        fontSize: 18,
        color: darkColors.white,

      }
    })
  )
}


export default style;
