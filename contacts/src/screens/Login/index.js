import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Container from '../../components/common/container/index';
import Input from '../../components/common/input/index';

const Login = () => {
  const [value, onChangeText] = useState('Useless Placeholder');
  return (
    <SafeAreaView>
      <Container>
        <Input
          label="Username"
          onChangeText={text => onChangeText(text)}
          value={value}
        />

        <Input
          label="Password"
          onChangeText={text => onChangeText(text)}
          value={value}
          icon={<Text>HIDE</Text>}
          iconPosition="right"
        />
      </Container>
    </SafeAreaView>
  );
};

export default Login;
