// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatBot from './screens/Chatbot';
import SettingsScreen from './screens/Settings';
import UsersScreen from './screens/Users';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChatBot"
          component={ChatBot}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen}   options={{ headerShown: false }} />
        <Stack.Screen name="Users" component={UsersScreen}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
