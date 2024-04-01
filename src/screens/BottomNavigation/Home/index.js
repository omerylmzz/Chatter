import React, { useEffect, useState } from "react";
import { Pressable, StatusBar, Text, TextInput, View } from "react-native";
import style, { darkStyles } from "./styles";
import Colors, { darkColors } from "../../../components/styles/Colors";
import { socket } from "../../../utils";
import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
import HomeHeader from "../../../components/headers/HomeHeader";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Home = () => {


  const styles = style();

  const currentUserId = auth().currentUser.uid;

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [groupName, setGroupName] = useState();
  const [groupPassword, setGroupPassword] = useState();

  useEffect(() => {
    selfInformation()
  }, []);

  const sendGroupName = () => {

    if (groupName !== "" && groupPassword !== "")
    {
      socket.emit("createNewGroup", {
        groupName: groupName,
        groupPassword: groupPassword,
        createrName: name,
        createrSurname: surname
      })
      setGroupName("")
      setGroupPassword("")
    }
    else {
      console.log("Boş")
    }

  }


  const selfInformation = () => {

    database().ref("Users").child(currentUserId + "/NAME").on("value", snapshot => {
      const name = snapshot.val();
      setName(name)
    })

    database().ref("Users").child(currentUserId + "/SURNAME").on("value", snapshot => {
      const surname = snapshot.val();
      setSurname(surname)
    })


  }


  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={styles.background} barStyle="light-content"/>
      <HomeHeader/>
      <View>
        <Text style={styles.title}>
          Let's create a room!
        </Text>
      </View>
      <View style={styles.body}>
        <View style={{flexDirection: "row", alignItems: "center", marginVertical: 10}}>
          <Icon name="account-group" color={darkColors.lightOrange} size={24}/>
          <TextInput
            style={styles.input}
            value={groupName}
            onChangeText={setGroupName}
            placeholder='Enter the room name'
            placeholderTextColor={Colors.primaryGrey}
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginBottom:10}}>
          <Icon name="lock" color={darkColors.lightOrange} size={24}/>
          <TextInput
            style={styles.input}
            value={groupPassword}
            onChangeText={setGroupPassword}
            placeholder='Enter the room password'
            placeholderTextColor={darkColors.placeholder}
          />
        </View>
        <View>
          <Pressable style={styles.button} onPress={() => sendGroupName()}>
            <Text style={styles.buttonText}>
              CREATE
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Home;
