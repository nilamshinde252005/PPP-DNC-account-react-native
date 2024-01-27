import React, {useEffect, useState} from "react";
import { Platform, SafeAreaView, View } from "react-native";
import { makeStyles, Text, Button, useThemeMode, ThemeProvider } from "@rneui/themed";
import { SnapshotOptions } from "firebase/firestore";
import LoginScreen from './components/loginScreen/LoginScreen'
import HomeScreen from './components/homeScreen/HomeScreen'
import SplashScreen from './components/splashScreen/SplashScreen'
import RegisterScreen from './components/registerScreen/RegisterScreen'
import AsyncStorage from '@react-native-community/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './components/settingsScreen/SettingsScreen';
import PackageScreen from './components/packageScreen/PackageScreen';
import CreditNoteScreen from './components/creditNoteScreen/CreditNoteScreen';
import ReportScreen from './components/reportScreen/ReportScreen';
import HomeTabNavigator from "./HomeTabNavigator";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

const Auth = (navigation) => {
  // Stack Navigator for Login and Sign up Screen
  console.log('Inside Auth(): ', navigation)
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
      <Stack.Screen
          name="HomeNav"
          options={{headerShown: false}}
          component={HomeTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const { setMode, mode } = useThemeMode();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<SnapshotOptions | undefined>(undefined);
  const [token, setToken] = useState(null);

  const handleOnPress = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  if (loading) {	
    return (	
      <></>	
    )	
  }

  useEffect(() => {
    // const tokenValue = AsyncStorage.getItem("token");
    
    AsyncStorage.getItem("token").then((value) => {
      console.log('Inside App.tsx useEffect() -> ' + JSON.stringify(value));
      console.log('!token value ->' + !value);
      setToken(value);
    })
      
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      headerShown: false
      }}>
    {
        !token ?
        <Stack.Group>
            <Stack.Screen 
               name="auth" 
               component={Auth}
            />
        </Stack.Group>
        :
        <Stack.Group>
            <Stack.Screen
               name="HomeNav"
               component={HomeTabNavigator}
            />
        </Stack.Group>
    }
    </Stack.Navigator>
    </NavigationContainer>
  );
}
