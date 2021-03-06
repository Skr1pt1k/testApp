import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, ApplicationsScreen, ResponsesScreen} from '_screens';

const HomeStack = createStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <HomeStack.Screen name="Applications" component={ApplicationsScreen} options={{headerShown: false}} />
      <HomeStack.Screen name="Responses" component={ResponsesScreen} options={{headerShown: false}} />
    </HomeStack.Navigator>
  );
};
