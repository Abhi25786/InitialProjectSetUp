import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Screens from '../Screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationStrings from './navigationStrings';


const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={navigationStrings.LOGIN} component={Screens.Login}/>
        <Stack.Screen name={navigationStrings.SIGNUP} component={Screens.SignUp}/>
    </Stack.Navigator>
  )
}


