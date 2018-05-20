import React, { Component } from "react";
import { View, Text } from "react-native";

import LoginForm from "./LoginForm";

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  loginFormStyle: {
    width: "75%",
    flex: 1
  }
};

class Login extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.loginFormStyle}>
          <LoginForm
            navigation={this.props.navigation}
            navigateToOptions={this.props.navigateToOptions}
          />
        </View>
      </View>
    );
  }
}

export default Login;
