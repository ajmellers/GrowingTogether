import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { Auth } from 'aws-amplify';

export default function LoginScreen() {
  useEffect(() => {
    // Check if the user is already signed in
    Auth.currentAuthenticatedUser()
      .then(user => {
        // Navigate to the main app screen
        navigation.navigate('Main');
      })
      .catch(error => {
        // The user is not signed in
      });
  }, []);

  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn('username', 'password');
      // Store the Signify token in local storage
      await AsyncStorage.setItem('token', user.signInUserSession.idToken.jwtToken);
      // Navigate to the main app screen
      navigation.navigate('Main');
    } catch (error) {
      console.log('Error signing in:', error);
    }
  };

  return (
    <View>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
}