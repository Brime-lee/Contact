import {SafeAreaView, View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Contacts = () => {
  return (
    <View>
      <Text>Hi from contacts</Text>
    </View>
  );
};
const ContactDetail = () => {
  return (
    <View>
      <Text>Hi from ContactDetails</Text>
    </View>
  );
};
const CreateContact = () => {
  return (
    <View>
      <Text>Hi from CreateContacts</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text>Hi from Settings</Text>
    </View>
  );
};

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen name="Contact" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Detail"
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Create Contact"
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
