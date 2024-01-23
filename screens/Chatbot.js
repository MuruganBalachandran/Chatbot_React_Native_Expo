// ChatBot.js

import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const ChatBot = () => {
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('');
  const navigation = useNavigation();

  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

  const handleSend = async () => {
    const prompt = textInput;
    const response = await axios.post(
      apiUrl,
      {
        prompt: prompt,
        max_tokens: 1024,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const text = response.data.choices[0].text;
    setData([...data, { type: 'user', text: textInput }, { type: 'ChatBot', text: text }]);
    setTextInput('');
  };

  const handlesetting = () => {
    navigation.navigate('Settings');
  };

  const handleuser = () => {
    navigation.navigate('Users');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      style={styles.container}
    >
      <View style={styles.headers}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={handleuser}>
            <FontAwesome name="user" size={30} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>AI ChatBot</Text>
        <View style={styles.rightHeader}>
          <TouchableOpacity onPress={handlesetting}>
            <FontAwesome name="cog" size={30} color="black" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        style={styles.body}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={item.type === 'user' ? styles.userText : styles.chatBotText}>
              {item.type === 'user' ? 'YourName:' : 'ChatBot:'}
            </Text>
            <Text style={styles.bot}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholder="Ask me something "
        />
        <TouchableOpacity style={styles.sendbutton} onPress={handleSend}>
          <FontAwesome name="send" size={25} color="whitesmoke" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7fbed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headers: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    marginBottom: 10,
  },
  leftHeader: {
    flex: 1,
    marginLeft: 10,
  },
  rightHeader: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  title: {
    fontSize: 30,
  },
  icon: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  body: {
    backgroundColor: 'rgba(231, 251, 237, 0.3)',
    width: '100%',
    margin: 10,
  },
  flatListContent: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  messageContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  userText: {
    fontWeight: 'bold',
    color: 'red',
  },
  chatBotText: {
    fontWeight: 'bold',
    color: 'green',
  },
  bot: {
    fontSize: 16,
    marginLeft: 10,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#5A5360',
    width: '70%',
    height: 60,
    borderRadius: 10,
    paddingLeft: 10,
  },
  sendbutton: {
    backgroundColor: '#1f1f1f',
    width: '20%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
  }
});

export default ChatBot;
