import { Dimensions, StyleSheet } from "react-native";
import Colors, { darkColors } from "../../../components/styles/Colors";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const style = () => {

  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

  return(
    StyleSheet.create({
      container:{
        flex: 1,
        backgroundColor: darkColors.background
      },
      title:{
        fontSize: 24,
        fontWeight: "bold",
        color: darkColors.white,
        padding: 10
      },
      body:{
        width: SCREEN_WIDTH * 0.98,
        alignSelf: "center",
        backgroundColor: darkColors.input,
        borderRadius:10,
        padding:10
      },
      settingsText:{
        color: Colors.primaryGrey,
        fontSize:14
      },
      input:{
        width: SCREEN_WIDTH * 0.85,
        height: SCREEN_HEIGHT * 0.06,
        backgroundColor: darkColors.secondary,
        color: darkColors.white,
        borderRadius: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10
      },
      button:{
        backgroundColor: darkColors.lightPurple,
        width: SCREEN_WIDTH * 0.85,
        height: SCREEN_HEIGHT * 0.06,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 10,
        marginVertical: 5,
        marginLeft: 35
      },
      buttonText:{
        fontFamily: "bebas",
        fontSize: 24,
        color: darkColors.white,

      }
    })
  )
}


export default style;
