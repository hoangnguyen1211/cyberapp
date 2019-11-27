import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, StyleSheet } from 'react-native';
import { SettingScreen } from '../screens/setting';
import { DiscussScreen } from '../screens/discuss';

import { HomeStack, LearnStack } from './statck';

export default createBottomTabNavigator({
  Learn: LearnStack,
  Home: HomeStack,
  Discuss: DiscussScreen,
  Setting: SettingScreen
}, 
{
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state;
    return ({
      // Gọi hàm để lấy tên tabbar
      tabBarLabel: ({ focused, horizontal, tintColor }) => {
        switch (routeName) {
          case "Learn":
            return <Text style={[styles.tabLabel, { color: tintColor }]}>
                Học tập
              </Text>
          case 'Discuss':
            return <Text style={[styles.tabLabel, { color: tintColor }]}>
              Thảo luận
            </Text>
          case 'Home':
            return <Text style={[styles.tabLabel, { color: tintColor }]}>
              Trang chủ
            </Text>
          case 'Setting':
            return <Text style={[styles.tabLabel, { color: tintColor }]}>
              Cài đặt
            </Text>
          default:
            break;
        }
      },
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        switch (routeName) {
          case 'Learn':
            return <Ionicons name='ios-school' size={22} color={tintColor} />
          case 'Discuss':
            return <Ionicons name='ios-chatboxes' size={25} color={tintColor} />
          case 'Home':
            return <Ionicons name='ios-home' size={22} color={tintColor} />
          case 'Setting':
            return <Ionicons name='ios-construct' size={22} color={tintColor} />
          default:
            break;
        }
      }
    })
  },
  tabBarOptions: {
    activeTintColor: '#ff9966',
    inactiveTintColor: 'gray',
    style: {
      paddingTop: 10
    }
  }
});

const styles = StyleSheet.create({
  tabLabel: {
      fontSize: 12,
      fontWeight: '600'
  }
})