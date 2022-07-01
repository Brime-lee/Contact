import {StatusBar, SafeAreaView, Text, useColorScheme} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

const AppNavContainer = () => {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      <SafeAreaView>
        {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavContainer;
