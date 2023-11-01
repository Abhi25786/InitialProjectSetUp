import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import actions from '../../../redux/actions'
import { strings } from '../../../constants/lang'
import fontfamily from '../../../styles/fontfamily'
import { primaryFontFamily } from '../../../redux/actions/main'
import { useSelector } from 'react-redux'
import { allReducer } from '../../../redux/Interface'

const Profile = () => {
  const primaryFont = useSelector((state: allReducer) => state?.main?.primaryFontFamily)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: primaryFont.bold }}>{strings('PROFILE')}</Text>
      <Button title='LogOut' onPress={() => actions.setUserData({})} />
      {fontfamily.map((item) => {
        return (
          <Button title={item.fontName} onPress={() => primaryFontFamily(item)} />
            )
          }
        )
      }
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})