import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import { Provider } from "react-redux";

import Start from "./src//ui/auth/Start/Start";

import Main from "./src/ui/main/Main";

import firebase from "firebase";
import firebaseConfig from "./firebase/firebase";

import PrimaryNav from "./src/Navigation/AppNavigation";

const RootStack = StackNavigator(
  {
    Start: {
      screen: Start
    },
    Main: {
      screen: Main
    }
  },
  {
    initialRouteName: "Start",
    headerMode: "none"
  }
);

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain,
      databaseURL: firebaseConfig.databaseURL,
      projectId: firebaseConfig.projectId,
      storageBucket: firebaseConfig.storageBucket,
      messagingSenderId: firebaseConfig.messagingSenderId
    });
  }

  render() {
    return <PrimaryNav />;
  }
}

export default App;
