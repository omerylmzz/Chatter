import { Dimensions, StyleSheet } from "react-native";
import { darkColors } from "../../components/styles/Colors";





const style = () => {

  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return(
    StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: darkColors.background,
        alignItems: "center"
      },
      header:{
        alignItems: "center",
        marginVertical: SCREEN_HEIGHT * 0.05
      },
      title:{
        fontWeight: "bold",
        fontSize: 32,
        color: darkColors.white,
      },
      description:{
        fontSize: 14,
        color: darkColors.description,
        marginVertical: 5
      },
      input:{
        flexDirection: "row",
        width: SCREEN_WIDTH * 0.95,
        height: SCREEN_HEIGHT*0.06,
        justifyContent: "space-between",
        backgroundColor: darkColors.input,
        borderRadius: 10,
        paddingHorizontal: SCREEN_WIDTH * 0.02,
        marginBottom: SCREEN_HEIGHT * 0.01,
      },
      text:{
        color: darkColors.description,
        fontSize: 14,
        textAlign: "center",
        paddingVertical: SCREEN_HEIGHT * 0.02,
      }
    })
  )
}

export default style;
