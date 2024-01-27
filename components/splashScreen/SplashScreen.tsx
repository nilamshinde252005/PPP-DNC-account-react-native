// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../loader/Loader';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
    setAnimating(false);
    console.log('inside SPLASH', navigation)
      
    navigation.replace('Auth')  
      
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../assets/icon.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 30}}
      /> */}
        <Image
            source={require('../../assets/icon.png')}
            style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
            }}
            />
        <Text
            style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
            }}>
            PPP DNC Account by PMC
        </Text>
        <ActivityIndicator
            animating={animating}
            color="#FFFFFF"
            size="large"
            style={styles.activityIndicator}
        />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});