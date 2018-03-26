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
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import MyApp from './App2';
import WebViewScreen from './WebView';
const Stack = StackNavigator({
  MyApp: {
    screen:MyApp ,
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'Welcome',
      headerTintColor: 'white',
        headerLeft: <TouchableOpacity onPress={() => {
          navigation.navigate('DrawerToggle');
        }}><Icon name='menu' style={{ marginLeft: 10 }} size={30} color={'white'} /></TouchableOpacity>
    })
  
  
  },

  WebViewScreen:{
    screen:WebViewScreen,
    navigationOptions:({navigation}) =>({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'WebView',
      headerTintColor: 'white',

    })
  }


}                                               

, {
  headerMode: 'float',
  
})  ;

export default Stack;

