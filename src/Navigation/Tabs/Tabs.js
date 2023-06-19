import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../../components/Home/Home';
import Messages from '../../components/Messages/Messages';
import Profile from '../../components/Profile/Profile';

const ButtomTabs = () => {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      activeColor="#094C69"
      inactiveColor="#0D6990"
      barStyle={{ backgroundColor: '#62C2EB' }}
    
      >
      <Tab.Screen
        name="tabs_home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={color} size={20} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Paramètres',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-cog"
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ButtomTabs;
