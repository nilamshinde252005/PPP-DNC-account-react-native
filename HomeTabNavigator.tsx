import { useThemeMode } from "@rneui/themed";
import { SnapshotOptions } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { View, Platform } from "react-native";
import CreditNoteScreen from "./components/creditNoteScreen/CreditNoteScreen";
import HomeScreen from "./components/homeScreen/HomeScreen";
import PackageScreen from "./components/packageScreen/PackageScreen";
import ReportScreen from "./components/reportScreen/ReportScreen";
import SettingsScreen from "./components/settingsScreen/SettingsScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle:{
    },
    tabBarItemStyle:{
    }
  };

export default function HomeTabNavigator() {
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
      console.log('HomeTabNavigator useEffect():');
    }, []);
  
    return (
    <Tab.Navigator initialRouteName="Home" {...{ screenOptions }}>
        <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                alignContent: 'center'
            },
            tabBarIcon: ({focused})=>{
            return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <Entypo name="home" size={24} color={focused ? "#16247d": "#111"} />
            </View>
            )
            },
            // tabBarActiveTintColor: '#58ceb2',
            // tabBarInactiveTintColor: 'gray',
            //Tab bar styles can be added here
            // tabBarStyle:{paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:'white',position:'absolute',height:50},
            // tabBarLabelStyle:{paddingBottom:3},
        }}
        />
        <Tab.Screen 
            name="Package" 
            component={PackageScreen} 
            options={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                tabBarIcon: ({focused})=>{
                return (
                    <View style={{alignItems: "center", justifyContent: "center"}}> 
                    <FontAwesome name="tasks" size={24} color={focused ? "#16247d": "#111"} />
                    </View>
                )
                }
            }}
        />
        <Tab.Screen 
            name="CreditNote" 
            component={CreditNoteScreen} 
            options={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                tabBarIcon: ({focused})=>{
                return (
                    <View
                    style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#16247d",
                    width: Platform.OS == "ios" ? 50 : 60,
                    height: Platform.OS == "ios" ? 50 : 60,
                    top: Platform.OS == "ios" ? -10 : -20,
                    borderRadius: Platform.OS == "ios" ? 25 : 30
                    }}
                    >
                    <FontAwesome name="money" size={24} color="#fff" />
                    </View>
                )
                }
            }}
        />
        <Tab.Screen
        name="Reports" 
        component={ReportScreen}
        options={{
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            tabBarIcon: ({focused})=>{
            return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#16247d": "#111"} />
            </View>
            )
            }
        }}
        />
        <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{
            headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            tabBarIcon: ({focused})=>{
            return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                <Ionicons name="settings" size={24}  color={focused ? "#16247d": "#111"} />
            </View>
            )
            }
        }}
        />
    </Tab.Navigator>
    )
}

