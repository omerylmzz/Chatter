import { StyleSheet } from "react-native";
import { darkColors } from "../../components/styles/Colors";

const style = () => {


  return(
    StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: darkColors.background,
        alignItems: "center",
        justifyContent: "center"
      }
    })
  )
}

export default style;
