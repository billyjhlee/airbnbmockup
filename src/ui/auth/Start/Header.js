import React, { Component } from "react";
import { View, Text, Image, Animated, Easing } from "react-native";

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5a60"
  }
};

class Header extends Component {
  constructor() {
    super();
    this.bounceInValue = new Animated.Value(0);
    this.fadeInValue = new Animated.Value(0);
    this.translateYInValue = new Animated.Value(-400);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    // this.fadeInValue.setValue(0);
    // this.bounceInValue.setValue(0);
    // this.translateYInValue.setValue(-400);
    Animated.parallel([
      Animated.timing(this.fadeInValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.in
      }),
      Animated.timing(this.bounceInValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce
      }),
      Animated.timing(this.translateYInValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.bounce
      })
    ]).start();
  }

  // bounce() {
  //   this.bounceInValue.setValue(0);
  //   Animated.timing(this.bounceInValue, {
  //     toValue: 1,
  //     duration: 2000,
  //     easing: Easing.bounce
  //   }).start();
  // }

  render() {
    return (
      <Animated.View
        style={[
          styles.containerStyle,
          { transform: [{ translateY: this.translateYInValue }] }
        ]}
      >
        <Animated.Image
          resizeMode="contain"
          style={{
            width: 100,
            height: 100,
            opacity: this.fadeInValue,
            transform: [{ scale: this.bounceInValue }]
          }}
          source={require("../../../../img/airbnb3.png")}
        />
      </Animated.View>
    );
  }
}

export default Header;
