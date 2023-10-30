
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'
import { useSelector } from 'react-redux'
import { allReducer, authInerface } from '../utils/Interface'
import MainStack from './MainStack'

const Routes = () => {
  const { userData } = useSelector((state: allReducer) => state?.auth)

  return (
    <NavigationContainer>
      {!!userData?.authToken ? MainStack() : AuthStack()}
    </NavigationContainer>
  )
}

export default Routes
