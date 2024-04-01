import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable, Dimensions, StatusBar,
} from "react-native";
import style from "./styles";
import { darkColors } from "../../components/styles/Colors";
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import * as yup from 'yup';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MainButton from "../../components/buttons/MainButton";

const Login = ({navigation}) => {

  const styles = style();
  const SCREEN_HEIGHT = Dimensions.get("window").height;

  const mailInput = useRef();
  const passwordInput = useRef();

  const [securePassword, setSecurePassword] = useState(true);
  const [loading, setLoading] = useState(false);



  const checkUser = (email, password) => {
    setLoading(true);
    setTimeout(() => {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setLoading(false);
          console.log('Kullanıcı başarılı bir şekilde giriş yaptı');
          navigation.replace("BottomNavigation");
        })
        .catch(error => {
          setLoading(false);
          console.log("Kullanıcı girişi yapılamadı");
          console.log(error);
        })
    }, 2000)


  }


  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={darkColors.background} barStyle={"light-content"}/>
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome To Chatter
        </Text>
        <Text style={styles.description}>
          We are so glad to see you!
        </Text>
      </View>
      <Formik
        initialValues={{
          email:"",
          password:""
        }}
        onSubmit={(values) => checkUser(values.email, values.password)}
        validationSchema={yup.object().shape({
          email: yup.string().required("E-mail address cannot be left blank"),
          password: yup.string().min(6, "Password must be at least 6 characters").required("Password cannot be left blank")
        })}
      >
        {({values, handleChange, handleSubmit, errors, touched}) => (
          <View style={{width: "100%", height: "100%", alignItems: "center"}}>
            <Pressable style={errors.email ? [styles.input, {borderColor: darkColors.lightRed, borderWidth: 1}] : styles.input} onPress={() => mailInput?.current?.focus()}>
              <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 10}}>
                  <Icon name="email" color={darkColors.lightOrange} size={24}/>
                  <View style={{width: 1, height: "50%", backgroundColor: darkColors.lightOrange, marginHorizontal: 8}}/>
                </View>
                <TextInput
                  ref={mailInput}
                  style={{color: darkColors.white}}
                  value={values.email}
                  onChangeText={handleChange("email")}
                  placeholder="E-mail address"
                  placeholderTextColor={darkColors.description}
                />
              </View>
            </Pressable>
            <Pressable style={errors.password ? [styles.input, {borderColor: darkColors.lightRed, borderWidth: 1}] : styles.input} onPress={() => passwordInput?.current?.focus()}>
              <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "row", alignItems: "center", paddingLeft: 10}}>
                  <Icon name="lock" color={darkColors.lightOrange} size={24}/>
                  <View style={{width: 1, height: "50%", backgroundColor: darkColors.lightOrange, marginHorizontal: 8}}></View>
                </View>
                <TextInput
                  ref={passwordInput}
                  style={{color: darkColors.white}}
                  value={values.password}
                  onChangeText={handleChange("password")}
                  secureTextEntry={securePassword}
                  placeholder="Password"
                  placeholderTextColor={darkColors.description}
                />
              </View>
              <View style={{alignSelf: "center", position: "absolute", right: 10}}>
                <Pressable onPress={() => setSecurePassword(a => !a)}>
                  <Icon name={securePassword ? "eye" : "eye-off"} color={darkColors.secondary} size={24}/>
                </Pressable>
              </View>
            </Pressable>
            <View style={{marginVertical: SCREEN_HEIGHT * 0.02}}>
              <MainButton
                text="Sign In"
                loading={loading}
                onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
      <View style={{position: "absolute", bottom:0, width: "100%"}}>
        <View style={{width: "100%", height: 0.5, backgroundColor: darkColors.secondary}}/>
        <View style={{flexDirection: "row", alignSelf: "center"}}>
          <Text style={styles.text}>
            Don't have an account?
          </Text>
          <Text style={[styles.text, {color: darkColors.lightPurple, marginLeft:5}]} onPress={() => navigation.navigate("SignUp")}>
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Login;
