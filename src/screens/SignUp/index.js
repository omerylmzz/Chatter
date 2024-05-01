import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Dimensions } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database'
import style from "../SignUp/styles";
import { darkColors } from "../../components/styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainButton from "../../components/buttons/MainButton";
import { Formik } from 'formik';
import * as yup from 'yup';

const SignUp = ({navigation}) => {

  const styles = style();
  const SCREEN_HEIGHT = Dimensions.get("window").height;

  const [loading, setLoading] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);

  const newUser = (name, surname, email, password) => {
    setLoading(true);
    setTimeout(() => {
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
          setLoading(false);
          console.log("Kullanıcı başarılı bir şekilde oluşturuldu");
          navigation.replace("BottomNavigation");
        })
        .catch(error => {
          setLoading(false);
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
    }, 2000);
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
      <Formik
        initialValues={{
          name: "",
          surname: "",
          email: "",
          password: ""
        }}
        onSubmit={(values) => newUser(values.name, values.surname, values.email, values.password)}
        validationSchema={yup.object().shape({
          name: yup.string().required("Name cannot be left blank"),
          surname: yup.string().required("Surname cannot be left blank"),
          email: yup.string().required("E-mail address cannot be left blank"),
          password: yup.string().min(6, "Password must be at least 6 characters").required("Password cannot be left blank")
        })}>
        {({values, handleChange, handleSubmit, errors}) => (
          <View style={{width: "100%", height: "100%", alignItems: "center"}}>
            <View style={errors.name ? [styles.input, {borderColor: darkColors.lightRed, borderWidth: 1}] : styles.input}>
              <TextInput
                style={{flex: 1, color: darkColors.white}}
                value={values.name}
                onChangeText={handleChange("name")}
                placeholder="Name"
                placeholderTextColor={darkColors.description}
              />
            </View>
            <View style={errors.surname ? [styles.input, {borderColor: darkColors.lightRed, borderWidth: 1}] : styles.input}>
              <TextInput
                style={{flex: 1, color: darkColors.white}}
                value={values.surname}
                onChangeText={handleChange("surname")}
                placeholder="Surname"
                placeholderTextColor={darkColors.description}
              />
            </View>
            <View style={errors.email ? [styles.input, {borderColor: darkColors.lightRed, borderWidth: 1}] : styles.input}>
              <TextInput
                style={{flex: 1, color: darkColors.white}}
                value={values.email}
                onChangeText={handleChange("email")}
                placeholder="E-mail address"
                placeholderTextColor={darkColors.description}
              />
            </View>
            <View style={errors.password ? [styles.input, {borderColor: darkColors.lightRed, borderWidth: 1}] : styles.input}>
              <TextInput
                style={{flex: 1, color: darkColors.white}}
                value={values.password}
                onChangeText={handleChange("password")}
                secureTextEntry={securePassword}
                placeholder="Password"
                placeholderTextColor={darkColors.description}
              />
              <View style={{position: "absolute", alignSelf: "center", right: 10}}>
                <TouchableOpacity onPress={() => setSecurePassword(a => !a)}>
                  <Ionicons name={securePassword ? "eye" : "eye-off"} color={darkColors.ripple} size={24}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginVertical: SCREEN_HEIGHT * 0.02}}>
              <MainButton
                mode={true}
                text="Sign Up"
                loading={loading}
                onPress={handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
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
