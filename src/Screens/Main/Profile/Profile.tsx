import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import actions from '../../../redux/actions'

const Profile = () => {
  return (
    <View>
    <Button title='LogOut' onPress={()=>actions.setUserData({})}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})