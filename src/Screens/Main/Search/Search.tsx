import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { allReducer } from '../../../redux/Interface'
import { strings } from '../../../constants/lang'

const Search = () => {
  const  primaryFont= useSelector((state:allReducer)=>state?.main?.primaryFontFamily)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontFamily:primaryFont.bold}}>{strings('SEARCH')}</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})