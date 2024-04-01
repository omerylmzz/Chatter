import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'
import style from "../SignUp/styles";
import { darkColors } from "../../components/styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainButton from "../../components/buttons/MainButton";

const SignUp = ({navigation}) => {

  const styles = style();
  const SCREEN_HEIGHT = Dimensions.get("window").height;

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);

  const newUser = () => {
    if (name === "" || surname === "" || email === "" || password === "") {
      console.log("Doldur");
    }
    else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          database().ref("Users").child(auth().currentUser.uid).set({
            ID: auth().currentUser.uid,
            NAME: name,
            SURNAME: surname,
            MAIL: email,
            PASSWORD: password
          });
          console.log("Kullanıcı başarılı bir şekilde oluşturuldu");
          navigation.replace("BottomNavigation");
        })
        .catch(error => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
          }
          else if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
          }
          else {
            console.error(error);
          }
        });
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Join us too
        </Text>
        <Text style={styles.description}>
          Fill your information
        </Text>
      </View>
      <View style={{width: "100%", height: "100%", alignItems: "center"}}>
        <View style={styles.input}>
          <TextInput
            style={{color: darkColors.white}}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            placeholderTextColor={darkColors.description}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={{color: darkColors.white}}
            value={surname}
            onChangeText={setSurname}
            placeholder="Surname"
            placeholderTextColor={darkColors.description}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={{color: darkColors.white}}
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail address"
            placeholderTextColor={darkColors.description}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={{color: darkColors.white}}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={securePassword}
            placeholder="Password"
            placeholderTextColor={darkColors.description}
          />
          <View style={{position: "absolute", alignSelf: "center", right: 10}}>
            <TouchableOpacity onPress={() => setSecurePassword(a => !a)}>
              <Ionicons name={securePassword ? "eye" : "eye-off"} color={darkColors.secondary} size={24}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: SCREEN_HEIGHT * 0.02}}>
          <MainButton
            mode={true}
            text="Sign Up"
            onPress={newUser}
          />
        </View>
      </View>
      <View style={{position: "absolute", bottom: 0, width: "100%"}}>
        <View style={{width: "100%", height: 0.5, backgroundColor: darkColors.secondary}}></View>
        <View style={{flexDirection: "row", alignSelf: "center"}}>
          <Text style={styles.text}>
            Do you have an account?
          </Text>
          <Text style={[styles.text, {color: darkColors.lightPurple, marginLeft: 5}]} onPress={() => navigation.goBack()}>
            Sign In
          </Text>
        </View>
      </View>
    </View>
  )
}

export default SignUp;
