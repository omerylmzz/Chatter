import React from "react";
import { FlatList, Text, View } from "react-native";
import { darkStyles } from "./styles";
import SettingsHeader from "../../../components/headers/SettingsHeader";
import data from "../../../data/SettingsItemData"
import SettingsItem from "../../../components/items/SettingsItem";
import auth from "@react-native-firebase/auth";

const Settings = ({navigation}) => {

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        navigation.replace('Login')
      });
  }

  return(
    <View style={darkStyles.container}>
      <SettingsHeader pressFunction={() => navigation.goBack()}/>
      <View style={{marginVertical:3}}>
        <FlatList data={data} keyExtractor={(item) => item.id} renderItem={({item}) =>
          <SettingsItem
            icon={item.icon}
            text={item.text}
            textColor={item.id === '6' ? 'red' : 'white'}
            colorStartIcon={item.id === '6' ? 'red' : 'white'}
            colorEndIcon={item.id === '6' ? 'red' : 'white'}
            pressFunction={() => item.id === '6' ? signOut() : console.log('BASILDI')}
          />
        }/>
      </View>
    </View>
  )
}

export default Settings;
