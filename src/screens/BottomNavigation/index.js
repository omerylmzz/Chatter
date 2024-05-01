import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { darkColors } from "../../components/styles/Colors";
import Home from "./Home";
import Profile from "./Profile";
import Room from "./Room";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const BottomNavigation = () => {

  const Tab = createBottomTabNavigator();


  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: darkColors.lightPurple,
        tabBarInactiveTintColor: darkColors.placeholder,
        tabBarHideOnKeyboard: true,
        tabBarStyle:{
          ...styles.tabBar
        },
      tabBarIcon: ({color, focused}) => {
        let iconName;

        if (route.name === "Room") {
          iconName = focused ? "account-group" : "account-group-outline"
        }
        else if (route.name === "Home") {
          iconName = focused ? "home" : "home-outline"
        }
        else if (route.name === "Profile") {
          iconName = focused ? "account" : "account-outline"
        }

        return <Icon name={iconName} color={color} size={24}/>
      }
    })}
    >
      <Tab.Screen
        name="Room"
        component={Room}
      />
      <Tab.Screen
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar:{
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    height:60,
    backgroundColor: darkColors.secondary,
    borderTopWidth: 0,
    borderRadius: 50,  
    elevation: 0  
  }
})


export default BottomNavigation;
