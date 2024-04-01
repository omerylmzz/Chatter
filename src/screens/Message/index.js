import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList, Keyboard, Pressable } from "react-native";
import { darkColors } from "../../components/styles/Colors";
import { socket } from "../../utils";
import auth from "@react-native-firebase/auth";
import MessageHeader from "../../components/headers/MessageHeader";
import { ReceiverBox, SenderBox } from "../../components/items/MessageBoxes";
import database from "@react-native-firebase/database";
import { darkStyles } from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Message = ({navigation, route}) => {

  const {groupId, groupName} = route.params;
  const currentUserId = auth().currentUser.uid;

  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();

  useEffect(() => {
    getInformation();
    socket.emit('getAllMessages');
    getMessage();
  }, [socket]);

  const getMessage = () => {
    socket.on('allMessages', (messages) => {
      setMessageList(messages.filter(i => i.groupId === groupId))
    })
  }

  const getInformation = () => {

    database().ref('Users').child(currentUserId + '/NAME').on('value', snapshot => {
      const name = snapshot.val();
      setName(name)
    })

    database().ref('Users').child(currentUserId + '/SURNAME').on('value', snapshot => {
      const surname = snapshot.val();
      setSurname(surname)
    })


  }



  const handleAddNewMessage = () => {
    const timeData =
      {
        hour: new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours(),
        minute: new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
      };

    if (message !== "")
    {
      socket.emit("messageData", {
        groupId:groupId,
        groupName:groupName,
        senderId:currentUserId,
        createrName:name,
        createrSurname:surname,
        message,
        timeData
      })
      setMessage("");
      Keyboard.dismiss();
    }
    else {
      console.log("Boş")
    }
  }

  return(
    <View style={darkStyles.container}>
      <MessageHeader
        groupName={groupName}
        pressFunction={() => navigation.goBack()}
      />
      <View>
        <FlatList
          data={messageList}
          renderItem={({item}) => currentUserId === item.senderId ?
            <SenderBox
              text={item.text}
              time={item.time}
            />
            :
            <ReceiverBox
              text={item.text}
              time={item.time}
              created={item.creater}
            />
        }
        />
      </View>
      <View style={darkStyles.bottomView}>
        <TextInput
          style={darkStyles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Write something..."
          placeholderTextColor={darkColors.placeholder}
        />
        <Pressable style={darkStyles.button} onPress={() => handleAddNewMessage()}>
          <Icon name="send" color={darkColors.white} size={20}/>
        </Pressable>
      </View>
    </View>
  )
}



export default Message;
