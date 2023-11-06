import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as Screens from '../Screens';
import { strings } from '../constants/lang';
import { fontFamilyobject } from '../redux/Interface';
import navigationStrings from './navigationStrings';
import { moderateScale, textScale, width } from '../styles/responsiveSize';

const Tab = createBottomTabNavigator();

const MainStack = (primaryFontFamily: fontFamilyobject, primaryLanguage: string) => {
  const styles = stylesFun(primaryFontFamily, primaryLanguage)
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: { fontFamily: primaryFontFamily.bold }
      }}

    >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{strings('HOME')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.SEARCH}
        component={Screens.Search}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{strings('SEARCH')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.POST}
        component={Screens.CreatePost}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{strings('POST')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.NOTIFICATION}
        component={Screens.Notification}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{strings('NOTIFICATION')}</Text>
          }
        }}
      />
      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={Screens.Profile}
        options={{
          tabBarLabel: () => {
            return <Text style={styles.lableTyle}>{strings('PROFILE')}</Text>
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default MainStack
export function stylesFun(primaryFontFamily: fontFamilyobject, primaryLanguage: string) {
  const styles = StyleSheet.create({
    tabBarStyle: {
      transform:
        [{ rotateY: primaryLanguage == 'ar' ? '180deg' : '0deg' }], marginHorizontal: moderateScale(10)
    },
    lableTyle: {
      fontFamily: primaryFontFamily.medium,
      fontSize: textScale(10),
      maxWidth: width / 5,
      textAlign: 'center'

    }
  })
  return styles
}

