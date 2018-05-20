import React, { Component } from "react";
import { View, Text, Animated, Easing } from "react-native";
import TimerMixin from "react-timer-mixin";

import FlatButtonDroid from "../../../common/FlatButtonDroid";
import SeparatorWithLabel from "../../../common/SeparatorWithLabel";

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcomeContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  welcomeTextStyle: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: "black"
  },
  buttonsContainerStyle: {
    flex: 2,
    alignItems: "center",
    width: "100%"
  },
  buttonStyle: {
    width: "60%",
    alignItems: "center",
    justifyContent: "center"
  },
  separatorStyle: {
    marginTop: 10,
    marginBottom: 10,
    width: "60%",
    alignItems: "center",
    justifyContent: "center"
  }
};

class Options extends Component {
  constructor() {
    super();
    this.signUpBtnScaleValue = new Animated.Value(0);
    this.separatorScaleValue = new Animated.Value(0);
    this.LoginBtnScaleValue = new Animated.Value(0);
    this.getStartedOpacityValue = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
    // this.timer = setTimeout(() => {
    //   this.animate();
    // }, 500);
  }

  // componentWillUnmount() {
  //   clearTimeout(this.timer);
  // }

  animate() {
    // this.signUpBtnScaleValue.setValue(0);
    // this.separatorScaleValue.setValue(0);
    // this.LoginBtnScaleValue.setValue(0);
    // this.getStartedOpacityValue.setValue(0);
    Animated.stagger(100, [
      Animated.timing(this.signUpBtnScaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce
      }),
      Animated.timing(this.separatorScaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce
      }),
      Animated.timing(this.LoginBtnScaleValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce
      }),
      Animated.timing(this.getStartedOpacityValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      })
    ]).start();
  }
  render() {
    const { onSignUpPress, onLoginPress } = this.props;
    return (
      <View style={styles.containerStyle}>
        <Animated.View
          style={[
            styles.welcomeContainerStyle,
            { opacity: this.getStartedOpacityValue }
          ]}
        >
          <Text style={styles.welcomeTextStyle}>Get Started!</Text>
        </Animated.View>
        <View style={styles.buttonsContainerStyle}>
          <Animated.View
            style={[
              styles.buttonStyle,
              { transform: [{ scale: this.signUpBtnScaleValue }] }
            ]}
          >
            <FlatButtonDroid
              containerStyle={{
                backgroundColor: "#bdc3c7"
              }}
              labelStyle={{
                color: "#fff"
              }}
              label="Sign Up"
              onPress={onSignUpPress}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.separatorStyle,
              { transform: [{ scale: this.separatorScaleValue }] }
            ]}
          >
            <SeparatorWithLabel
              label="Or"
              lineStyle={{ backgroundColor: "grey" }}
              labelStyle={{ color: "grey" }}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.buttonStyle,
              { transform: [{ scale: this.LoginBtnScaleValue }] }
            ]}
          >
            <FlatButtonDroid
              containerStyle={{ backgroundColor: "#ff5a60" }}
              labelStyle={{
                color: "#fff"
              }}
              label="Login"
              onPress={onLoginPress}
            />
          </Animated.View>
        </View>
      </View>
    );
  }
}

export default Options;
