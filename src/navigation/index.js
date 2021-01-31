import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {HomeStackScreen} from './homeStackScreen';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
};
