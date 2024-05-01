import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import BottomNavigation from "./BottomNavigation";
import Message from "./Message";
const Route = () => {

  const Stack = createNativeStackNavigator();

  return(
    <Stack.Navigator
    screenOptions={{
      orientation: "portrait",
      headerShown: false
    }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animation: "none"
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          animation: "none"
        }}
      />
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
          animation: "fade"
        }}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{
          animation: "slide_from_right"
        }}
      />
    </Stack.Navigator>
  )
}

export default Route;
