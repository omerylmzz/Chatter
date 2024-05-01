import React from "react";
import Route from "./src/screens/Route";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { darkColors } from "./src/components/styles/Colors";


const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={darkColors.background} barStyle="light-content"/>
      <Route/>
    </NavigationContainer>
  )
}

export default App;
