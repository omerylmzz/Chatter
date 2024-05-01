import { Dimensions, StyleSheet } from "react-native";
import { darkColors } from "../../components/styles/Colors";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");
const darkStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: darkColors.background,
  },
  input:{
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.06,
    backgroundColor: darkColors.input,
    borderRadius: 50,
    paddingHorizontal: 20,
    fontSize:15,
    color: darkColors.white
  },
  bottomView:{
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    padding: 15
  },
  button:{
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkColors.lightPurple,
    borderRadius: 50,
    marginHorizontal: 10
  }
})

export {darkStyles};
