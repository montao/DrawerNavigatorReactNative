import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, TouchableOpacity,TouchableNativeFeedback} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
          <TouchableOpacity onPress={this.navigateToScreen('DrawerScreen1')}>    
              <Text style={styles.navItemStyle} >
              DrawerItem1
              </Text>
            </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToScreen('DrawerScreen2')}>
              <Text style={styles.navItemStyle} >
              DrawerItem2
              </Text>                         
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;