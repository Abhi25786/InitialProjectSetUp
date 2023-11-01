import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { strings } from '../../../constants/lang'
import { changePrimaryTranslation } from '../../../redux/actions/main'
import { useSelector } from 'react-redux'
import { allReducer } from '../../../redux/Interface'

const Home = () => {
  const primaryFont = useSelector((state: allReducer) => state?.main?.primaryFontFamily)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: primaryFont.bold }}>{strings('HOME')}</Text>
      <Button title="Switch to Arabic" onPress={() => changePrimaryTranslation('ar')} />
      <Button title="Switch to English" onPress={() => changePrimaryTranslation('en')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})