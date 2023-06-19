import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../components/Home/Home';
import ButtomTabs from '../Tabs/Tabs';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>  
        <Stack.Screen name="HomeScreen" component={ButtomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
