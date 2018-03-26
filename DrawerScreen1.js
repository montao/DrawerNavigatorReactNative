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
import { TabNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import Tab1 from './Tab11';
import Tab2 from './Tab12';
import Tab3 from './Tab13';
import SideMenu from './SideMenu';
const MyTabs = TabNavigator({
  Tab1: {
    screen:Tab1 
  
  
  },
  Tab2: {
    screen: Tab2,
  },

  Tab3: {
    screen: Tab3,
  },
},

{
  animationEnabled: true,  
  backBehavior:'none', 
  tabBarPosition:'bottom',                      
  tabBarOptions: {      
    pressOpacity:0.5,
    upperCaseLabel: false,  
    activeBackgroundColor:'#ffffff',
      activeTintColor: '#4C3E54',
      inactiveTintColor: '#c8cace',
      showIcon: false,
      scrollEnabled:true,
      indicatorStyle: {                         
        borderBottomWidth: 5,
        borderColor: '#4C3E54'
      },
      labelStyle:{                                           




        fontWeight: 'bold',                         
        fontSize: 15,                   
        justifyContent: 'center',
        alignItems: 'center',
      },
      style:{
        
        backgroundColor: '#FFF',
      },
      tabStyle: {                           
      }
  },
}
);

export default MyTabs;
