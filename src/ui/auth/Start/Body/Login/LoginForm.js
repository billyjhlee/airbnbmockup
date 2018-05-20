import React, { Component } from "react";
import { View, Text, Animated, Easing, BackHandler } from "react-native";

import Field from "../../../../common/Field";
import FlatButtonDroid from "../../../../common/FlatButtonDroid";

const styles = {
  containerStyle: {
    flex: 1
  },
  fieldsContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    width: "100%"
  },
  emailContainerStyle: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  },
  passwordContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  buttonContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  fieldInputStyle: {
    fontSize: 16
  }
};

class LoginForm extends Component {
  constructor() {
    super();
    this.emailFieldTranslateXValue = new Animated.Value(-500);
    this.passwordFieldTranslateYValue = new Animated.Value(500);
    this.loginBtnTranslateXValue = new Animated.Value(-500);
  }

  componentDidMount() {
    this.mountAnimate();
    BackHandler.addEventListener(
      "hardwareBackPress",
      this.handleHardwareBackPress
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      "hardwareBackPress",
      this.handleHardwareBackPress
    );
  }

  handleUnMountAnimation = () => {
    this.unMountAnimate(this.props.navigateToOptions);
    return Promise.resolve();
  };

  handleHardwareBackPress = () => {
    this.unMountAnimate(this.props.navigateToOptions);
    return true;
  };

  mountAnimate = () => {
    Animated.stagger(100, [
      Animated.timing(this.emailFieldTranslateXValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.quad
      }),
      Animated.timing(this.passwordFieldTranslateYValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.quad
      }),
      Animated.timing(this.loginBtnTranslateXValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.quad
      })
    ]).start();
  };

  unMountAnimate = callback => {
    Animated.stagger(100, [
      Animated.timing(this.emailFieldTranslateXValue, {
        toValue: -500,
        duration: 300,
        easing: Easing.quad
      }),
      Animated.timing(this.passwordFieldTranslateYValue, {
        toValue: 500,
        duration: 300,
        easing: Easing.quad
      }),
      Animated.timing(this.loginBtnTranslateXValue, {
        toValue: -500,
        duration: 300,
        easing: Easing.quad
      })
    ]).start(() => {
      callback();
    });
  };

  onLogin = () => {
    this.props.navigation.navigate("MainStack");
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.fieldsContainerStyle}>
          <Animated.View
            style={[
              styles.emailContainerStyle,
              { transform: [{ translateX: this.emailFieldTranslateXValue }] }
            ]}
          >
            <Field
              placeholder="Email"
              textInputStyle={styles.fieldInputStyle}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.passwordContainerStyle,
              { transform: [{ translateX: this.passwordFieldTranslateYValue }] }
            ]}
          >
            <Field
              placeholder="password"
              textInputStyle={styles.fieldInputStyle}
            />
          </Animated.View>
        </View>
        <Animated.View
          style={[
            styles.buttonContainerStyle,
            { transform: [{ translateX: this.loginBtnTranslateXValue }] }
          ]}
        >
          <FlatButtonDroid
            label="Log In"
            containerStyle={{
              backgroundColor: "#ff5a60",
              padding: 15
            }}
            labelStyle={{
              color: "#fff",
              fontSize: 18
            }}
            onPress={this.onLogin}
          />
        </Animated.View>
      </View>
    );
  }
}

export default LoginForm;
