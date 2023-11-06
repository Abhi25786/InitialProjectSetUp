
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './AuthStack'
import { useSelector } from 'react-redux'
import { allReducer, authInerface, fontFamilyobject } from '../redux/Interface'
import MainStack from './MainStack'

const Routes = () => {
  const { userData } = useSelector((state: allReducer) => state?.auth)
  const  {primaryFontFamily,primaryLanguage} = useSelector((state:allReducer)=>state?.main || {});

  return (
    <NavigationContainer>
      {!!userData?.authToken 
      ? 
      MainStack(primaryFontFamily,primaryLanguage)
       : AuthStack(primaryFontFamily)
       }
    </NavigationContainer>
  )
}

export default Routes
