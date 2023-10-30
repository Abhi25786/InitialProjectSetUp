import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '../Screens'
import navigationStrings from './navigationStrings';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={navigationStrings.HOME} component={Screens.Home} />
      <Tab.Screen name={navigationStrings.SEARCH} component={Screens.Search} />
      <Tab.Screen name={navigationStrings.POST} component={Screens.CreatePost} />
      <Tab.Screen name={navigationStrings.NOTIFICATION} component={Screens.Notification} />
      <Tab.Screen name={navigationStrings.PROFILE} component={Screens.Profile} />
    </Tab.Navigator>
  )
}

export default MainStack

