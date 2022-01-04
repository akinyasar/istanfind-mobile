import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { auth, firestoreDb } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import * as Notifications from "expo-notifications";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import Constants from 'expo-constants';

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home");
      }
    })
    return unsubscribe
  }, [])

  
async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        registerForPushNotificationsAsync().then(async token => {
          await setDoc(doc(firestoreDb, "userData", email), {
            expoToken : token,
          });
          Alert.alert(
            "Register",
            "You have successfully registered."
          );
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.replace("Firebase:", "");;
        Alert.alert(
          errorCode,
          errorMessage,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      });
  };

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        Alert.alert(
          "Login",
          "You have successfully logged in."
        );})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.replace("Firebase:", "");;
        Alert.alert(
          errorCode,
          errorMessage,
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
