import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Profile from "./Profile";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../components/styles/Colors";
import Room from "./Room";

const BottomNavigation = () => {

  const Tab = createBottomTabNavigator();

  const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity activeOpacity={0.8} style={{top: -20, justifyContent:'center', alignItems:'center', ...styles.shadow}} onPress={onPress}>
      <View style={{width:60, height:60, borderRadius:35, backgroundColor:Colors.primaryPurple}}>
        {children}
      </View>
    </TouchableOpacity>
  )

  return(
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown:false,
        tabBarShowLabel:false,
        tabBarActiveTintColor: Colors.primaryPurple,
        tabBarInactiveTintColor: Colors.primaryGrey,
        tabBarHideOnKeyboard:true,
        tabBarStyle:{
          backgroundColor:'#2E2E2E',
          borderTopWidth:0,
          position:'absolute',
          bottom:25,
          left:20,
          right:20,
          borderRadius:50,
          height:60,
          ...styles.shadow
        },
      tabBarIcon: ({color, size, focused}) => {
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
  shadow:{
    shadowOffset:{
      width:0,
      height:1,
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:0
  }
})

export default BottomNavigation;
