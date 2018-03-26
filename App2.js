/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import DrawerScreen1 from './DrawerScreen1';
import DrawerScreen2 from './DrawerScreen2';
import SideMenu from './SideMenu';
const MyApp = DrawerNavigator({
  DrawerScreen1: {
    screen:DrawerScreen1 
  
  
  },
  DrawerScreen2: {
    screen: DrawerScreen2,
  },
},

{
 // contentComponent: SideMenu,

  contentOptions:{
    activeTintColor:'#fff',
    activeBackgroundColor:'#4C3E54',
    inactiveTintColor:'#4C3E54'
  }
});

export default MyApp;

