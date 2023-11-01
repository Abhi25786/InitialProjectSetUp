import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from '../Screens'
import navigationStrings from './navigationStrings';
import { useSelector } from 'react-redux';
import { allReducer, fontFamilyobject } from '../redux/Interface';
import { strings } from '../constants/lang';

const Tab = createBottomTabNavigator();

const MainStack = (primaryFontFamily:fontFamilyobject) => {
const styles = stylesFun(primaryFontFamily)
  return (
    <Tab.Navigator 
    screenOptions={{
       headerShown: false ,
       tabBarLabelStyle:{fontFamily:primaryFontFamily.bold}}}
    
       >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Screens.Home}
        options={{
          tabBarLabel:()=>{
          return <Text style={styles.lableTyle}>{strings('HOME')}</Text>
        }
      }}
      />
      <Tab.Screen
       name={navigationStrings.SEARCH}
        component={Screens.Search}
        options={{
          tabBarLabel:()=>{
          return <Text style={styles.lableTyle}>{strings('SEARCH')}</Text>
        }
      }}
       />
      <Tab.Screen
       name={navigationStrings.POST}
        component={Screens.CreatePost}
        options={{
          tabBarLabel:()=>{
          return <Text style={styles.lableTyle}>{strings('POST')}</Text>
        }
      }}
       />
      <Tab.Screen 
      name={navigationStrings.NOTIFICATION} 
      component={Screens.Notification}
      options={{
        tabBarLabel:()=>{
        return <Text style={styles.lableTyle}>{strings('NOTIFICATION')}</Text>
      }
    }}
     />
      <Tab.Screen 
      name={navigationStrings.PROFILE}
       component={Screens.Profile}
       options={{
        tabBarLabel:()=>{
        return <Text style={styles.lableTyle}>{strings('PROFILE')}</Text>
      }
    }}
     />
    </Tab.Navigator>
  )
}

export default MainStack
export function stylesFun(primaryFontFamily:fontFamilyobject){
  const styles = StyleSheet.create({
    lableTyle:{
      fontFamily:primaryFontFamily.medium,
      fontSize:12

    }
  })
  return styles
}

