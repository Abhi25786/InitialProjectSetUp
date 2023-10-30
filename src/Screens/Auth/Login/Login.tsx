import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import actions from '../../../redux/actions'

const Login = () => {
  return (
    <View>
      <Button title='Login' onPress={()=>actions.setUserData({authToken:'ciaugvuisyfdvsuyfudbk'})}/>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})