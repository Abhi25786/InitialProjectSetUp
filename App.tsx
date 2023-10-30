import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Routes from './src/Navigations/Routes'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import { getItem } from './src/utils/utils'
import { userDataObject } from './src/utils/Interface'
import { setUserData } from './src/redux/actions/auth'

const App = () => {
  useEffect(() => {
    (async () => {
      const userData = await getItem('userData') as userDataObject
      console.log(userData, 'userDatauserDatauserData');
      if(!!userData.authToken){
        setUserData(userData)
      }

    })()
  }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaView>
  )
}

export default App

