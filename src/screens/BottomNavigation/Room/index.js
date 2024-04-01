import React, { useEffect, useState } from "react";
import { FlatList, Modal, Pressable, Text, TextInput, View } from "react-native";
import { socket } from "../../../utils";
import { darkStyles } from "./styles";
import RoomHeader from "../../../components/headers/RoomHeader";
import RoomItem from "../../../components/items/RoomItem";
import Colors from "../../../components/styles/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";


const Room = ({navigation}) => {

  const [groupList, setGroupList] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);
  const [groupId, setGroupId] = useState();
  const [groupName, setGroupName] = useState();
  const [groupPassword, setGroupPassword] = useState();
  const [password, setPassword] = useState();


  useEffect(() => {
    socket.emit("getAllGroups");
    socket.on("groupList", (groupList) => {
      setGroupList(groupList)
    })
  }, [socket]);


  const handleNavigateToMessage = () => {
    if (password !== "" && password === groupPassword)
    {
      navigation.navigate("Message", {
        groupId:groupId,
        groupName:groupName
      })
      setPassword("");
      setVisibleModal(false);
    }
    else if (password !== '' && password !== groupPassword)
    {
      console.log("Yanlış şifre");
    }
  }

  const handleOpenTheModal = (item) => {

    setVisibleModal(true)
    setGroupId(item.groupId);
    setGroupName(item.groupName);
    setGroupPassword(item.groupPassword);

  }

  return(
    <View style={darkStyles.container}>
      <RoomHeader/>
      <Modal transparent={true} visible={visibleModal} animationType="fade">
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000000aa"}}>
          <View style={darkStyles.modalContainer}>
            <View>
              <Text style={darkStyles.modalTitle}>
                Room Password
              </Text>
            </View>
            <View style={{width:'100%'}}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={darkStyles.modalInput}
                placeholder='Password'
                placeholderTextColor={Colors.primaryGrey}
              />
            </View>
            <View style={{width:'100%'}}>
              <Pressable style={darkStyles.modalButton} onPress={() => handleNavigateToMessage()}>
                <Text style={darkStyles.modalButtonText}>
                  CONTINUE
                </Text>
              </Pressable>
            </View>
            <View style={{position:'absolute', top:10, right:10}}>
              <Pressable style={darkStyles.modalCloseButton} onPress={() => setVisibleModal(false)}>
                <Ionicons name="close" color="white" size={20}/>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{marginTop:2}}>
        <FlatList
          data={groupList}
          renderItem={({item}) =>
            <RoomItem
              description={`Created by ${item.createrName} ${item.createrSurname}`}
              title={item.groupName}
              pressFunction={() => handleOpenTheModal(item)}
            />
          }
        />
      </View>
    </View>
  )
}

export default Room;
