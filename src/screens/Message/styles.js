import {StyleSheet} from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Colors from "../../components/styles/Colors";

const darkStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.darkBackgroundColor,
  },
  input:{
    width:wp('80%'),
    height:hp('6%'),
    backgroundColor:Colors.secondaryBlack,
    borderRadius:50,
    paddingHorizontal:20,
    fontSize:15,
    color:'white'
  },
  bottomView:{
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center',
    padding:15
  },
  button:{
    width:50,
    height:50,
    backgroundColor:Colors.primaryPurple,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
    marginHorizontal:10
  }
})

export {darkStyles};
