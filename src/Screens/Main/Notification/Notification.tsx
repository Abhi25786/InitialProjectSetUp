import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { allReducer } from '../../../redux/Interface'
import { strings } from '../../../constants/lang'

const Notification = () => {
  const primaryFont = useSelector((state: allReducer) => state?.main?.primaryFontFamily)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: primaryFont.bold }}>{strings('NOTIFICATION')}</Text>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})