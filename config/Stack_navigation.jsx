import { View, Text } from 'react-native'
import React from 'react'
import {  NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/HomeScreen'
import Notifications from './screens/LoginScreen'

const Stack_navigation = () => {
const Stack = createStackNavigator()

  return (
    <NavigationContainer>
           <Stack.Navigator>
      <Stack.Screen
      
      
      name="Notifications" component={Notifications} />
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Stack_navigation