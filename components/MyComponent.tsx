import React, {useEffect, useState} from "react";
import { View } from "react-native";
import { makeStyles, Text, Button, useThemeMode } from "@rneui/themed";
import { app } from '../services/config'
import firebase from 'firebase/app';
import firestore from "firebase/firestore"
import 'firebase/firestore';
import 'firebase/auth';
import { SnapshotOptions } from "firebase/firestore";

export default function App() {
  const styles = useStyles();
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
    console.log('here:', app);
    const usersRef = app.firestore().collection('users');
    app.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text h3>Start Using RNE </Text>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
      
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginVertical: theme.spacing.lg,
  },
}));
