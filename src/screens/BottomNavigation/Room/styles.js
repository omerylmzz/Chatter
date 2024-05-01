import { Dimensions, StyleSheet } from "react-native";
import { darkColors } from "../../../components/styles/Colors";

const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');
const darkStyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: darkColors.background
  },
  modalContainer:{
    backgroundColor: darkColors.background,
    width: "55%",
    height: SCREEN_HEIGHT*0.26,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  modalTitle:{
    fontWeight: "bold",
    color: darkColors.white,
    fontSize: 24,
    marginTop: 30
  },
  modalInput:{
    backgroundColor: darkColors.secondary,
    width: "85%",
    height:SCREEN_HEIGHT*0.045,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: darkColors.lightPurple,
    color: darkColors.white,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  modalButton:{
    backgroundColor: darkColors.lightPurple,
    width: "85%",
    height: SCREEN_HEIGHT*0.045,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 5
  },
  modalButtonText:{
    fontWeight: "bold",
    color: darkColors.white
  },
  modalCloseButton:{
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkColors.lightRed,
    borderRadius: 50
  }
})

export {darkStyles};
