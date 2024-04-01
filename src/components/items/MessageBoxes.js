import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors, { darkColors } from "../styles/Colors";

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get("window");
const SenderBox = ({text, time}) => {
  return(
    <View style={styles.containerSender}>
      <Text style={styles.senderText}>
        {text}
      </Text>
      <Text style={styles.senderTime}>
        {time}
      </Text>
    </View>
  )
}

const ReceiverBox = ({text, time, created}) => {
  return(
    <View style={styles.containerReceiver}>
      <Text style={styles.nameText}>
        {created}
      </Text>
      <Text style={styles.receiverText}>
        {text}
      </Text>
      <Text style={styles.receiverTime}>
        {time}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerSender:{
    justifyContent: "space-between",
    alignSelf: "flex-end",
    backgroundColor: darkColors.lightOrange,
    borderRadius: 10,
    maxWidth: SCREEN_WIDTH * 0.8,
    margin: SCREEN_WIDTH * 0.005,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
    paddingVertical: SCREEN_HEIGHT *0.01
  },
  senderText:{
    fontSize: 16,
    color: "white"
  },
  senderTime:{
    alignSelf: "flex-end",
    fontSize: 10,
    opacity: 0.8,
    color: "white",
  },
  containerReceiver:{
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    backgroundColor: darkColors.input,
    borderRadius: 10,
    maxWidth: SCREEN_WIDTH * 0.8,
    margin: SCREEN_WIDTH * 0.005,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
    paddingVertical: SCREEN_HEIGHT *0.005
  },
  nameText:{
    color: darkColors.description,
  },
  receiverText:{
    fontSize: 16,
    color: darkColors.white,
    paddingRight: SCREEN_WIDTH * 0.1
  },
  receiverTime:{
    alignSelf: "flex-end",
    fontSize: 10,
    color: darkColors.description,
  }
})



export {SenderBox, ReceiverBox};

