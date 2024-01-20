import React, {useEffect, useState} from "react";
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode, ThemeProvider } from "@rneui/themed";
import { SnapshotOptions } from "firebase/firestore";
import LoginScreen from './components/loginScreen/LoginScreen'
import HomeScreen from './components/homeScreen/HomeScreen'
import SplashScreen from './components/splashScreen/SplashScreen'
import RegisterScreen from './components/registerScreen/RegisterScreen'
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigationRoutes from './components/drawerNavigationRoutes/DrawerNavigationRoutes';

const Stack = createStackNavigator();

const Auth = (navigation) => {
  // Stack Navigator for Login and Sign up Screen
  console.log('auth', navigation)
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const { setMode, mode } = useThemeMode();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<SnapshotOptions | undefined>(undefined);

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  if (loading) {	
    return (	
      <></>	
    )	
  }

  useEffect(() => {
    console.log('here:');
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
