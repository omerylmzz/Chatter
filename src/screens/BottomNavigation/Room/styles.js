import { Dimensions, StyleSheet } from "react-native";
import Colors, { darkColors } from "../../../components/styles/Colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const {width:SCREEN_WIDTH, height:SCREEN_HEIGHT} = Dimensions.get('window');
const darkStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.darkBackgroundColor
  },
  modalContainer:{
    backgroundColor:Colors.primaryBlack,
    width:'55%',
    height:SCREEN_HEIGHT*0.26,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  modalTitle:{
    fontWeight: "bold",
    color: darkColors.white,
    fontSize: 24,
    marginTop: 30
  },
  modalInput:{
    backgroundColor:Colors.secondaryBlack,
    width:'85%',
    height:SCREEN_HEIGHT*0.045,
    borderRadius:10,
    borderWidth:1,
    borderColor:Colors.primaryPurple,
    alignSelf:'center',
    color:'white',
    marginVertical:10,
    paddingHorizontal:10
  },
  modalButton:{
    backgroundColor:Colors.primaryPurple,
    width:'85%',
    height:SCREEN_HEIGHT*0.045,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:10,
    marginTop:5
  },
  modalButtonText:{
    fontWeight: "bold",
    color: darkColors.white
  },
  modalCloseButton:{
    width: 30,
    height: 30,
    backgroundColor: "#c23616",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})

export {darkStyles};
