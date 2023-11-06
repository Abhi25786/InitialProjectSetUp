import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './src/Navigations/Routes';
import { fontFamilyobject, userDataObject } from './src/redux/Interface';
import actions from './src/redux/actions';
import { store } from './src/redux/store';
import { getItem } from './src/utils/utils';
import i18next from './src/constants/lang'


const App = () => {
  useEffect(() => {
    (async () => {


      // check primary lang
      const primaryTranslation = await getItem('primaryTranslation') as string
      if(!!primaryTranslation){
        actions.changePrimaryTranslation(primaryTranslation)
      }else{
        i18next.changeLanguage('en');
      }

      // check user exist or not
      const userData = await getItem('userData') as userDataObject
      if (!!userData.authToken) {
        actions.setUserData((userData))
      }
      // primaryFontFamily
      const primaryFontFamily = await getItem('primaryFontFamily') as fontFamilyobject
      if (!!primaryFontFamily) {
        actions.primaryFontFamily(primaryFontFamily)
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

