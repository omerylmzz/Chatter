import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import style from "./styles";
import auth from '@react-native-firebase/auth';
import database from "@react-native-firebase/database";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Profile = ({navigation}) => {

  const styles = style();

  const currentUserId = auth().currentUser.uid;
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  useEffect(() => {
    selfInformation();
  }, []);


  const selfInformation = () => {

    database().ref("Users").child(currentUserId + "/NAME").on("value", snapshot => {
      const name = snapshot.val();
      setName(name);
    })

    database().ref("Users").child(currentUserId + "/SURNAME").on("value", snapshot => {
      const surname = snapshot.val();
      setSurname(surname);
    })

  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{alignSelf: "flex-end", margin: 10}} onPress={() => navigation.navigate("Settings")} activeOpacity={0.5}>
          <Icon name="cog" color="white" size={24}/>
        </TouchableOpacity>
        <View style={styles.information}>
          <View style={styles.logo}/>
          <Text style={styles.text}>
            {name} {surname}
          </Text>
        </View>
      </View>
    </View>
  )
}


export default Profile;
