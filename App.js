

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import Home from './android/app/src/screens/Home';
import Profile from './android/app/src/screens/Profile';
import Settings from './android/app/src/screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';




const  App = ()=> {

  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={
          {
           
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={20} color={"#000"} />
            ),
        }} />
        <Tab.Screen name='Profile' component={Profile}  options={
          {
           
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={20} color={"#000"} />
            ),
        }} />
        <Tab.Screen name='Settings' component={Settings} options={
          {
           
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" size={20} color={"#000"} />
            ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
 }
 export default App;