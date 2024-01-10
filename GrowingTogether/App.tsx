

import React from 'react';
import type {PropsWithChildren} from 'react';
import { StyleSheet,  View,  Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/NavigationScreen/HomeScreen";
import MyAreaScreen from './src/screens/NavigationScreen/MyAreaScreen';
import ForSwapScreen from './src/screens/NavigationScreen/ForSwapScreen.js';
import SettingsScreen from './src/screens/NavigationScreen/SettingsScreen.js';
// import CreateUserScreen from './src/screens/LoginScreens/CreateUserScreen';
// import LoginScreen from './src/screens/LoginScreens/LoginScreen';
// import LoginMain from './src/screens/LoginScreens/LoginMain';
// import Calendar from './src/screens/HomePageComponents/Calendar';



function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = require('./assets/icons/home.png');
          } else if (route.name === 'My Area') {
            iconPath = require('./assets/icons/flower.png');
          } else if (route.name === 'For Swap') {
            iconPath = require('./assets/icons/recycle.png');
          } else if (route.name === 'Settings') {
            iconPath = require('./assets/icons/cog.png');
          }

          return (
            <Image
              source={iconPath}
              resizeMode="contain"
              style={{ width: size, height: size }}
            />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Area" component={MyAreaScreen} />
      <Tab.Screen name="For Swap" component={ForSwapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;


const Tab = createBottomTabNavigator();

