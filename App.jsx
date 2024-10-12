import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './config/screens/HomeScreen';
import LoginScreen from './config/screens/LoginScreen';
import SignupScreen from './config/screens/SignScreen';
import ProfileScreen from './config/screens/ProfileScreen';
 // You can add a Profile or other tab screens

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Create a Tab Navigator with Home and Profile screens
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        {/* Replacing the Home screen with the tab navigator */}
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
