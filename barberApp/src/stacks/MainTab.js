import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Appointments from '../screens/Apppointments';
import Favorities from '../screens/Favorities';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Appointments" component={Appointments} />
    <Tab.Screen name="Favorities" component={Favorities} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
