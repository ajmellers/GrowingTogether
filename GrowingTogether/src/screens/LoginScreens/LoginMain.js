import React from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';

const LoginScreen = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  return (
    <View>
      <Text>Main Screen</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default LoginScreen;