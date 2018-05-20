import React, { Component } from "react";
import {
  Button,
  TouchableWithoutFeedback,
  Text,
  View,
  Animated,
  Easing,
  StyleSheet
} from "react-native";

const styles = {
  flatButtonStyle: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10
  },
  titleStyle: {
    fontSize: 16
  }
};

const MAX_DIAMETER = 500;

class FlatButton extends Component {
  constructor() {
    super();
    this.state = {
      diameter: MAX_DIAMETER,
      maxOpacity: 0.3
    };
    this.rippleScaleValue = new Animated.Value(0);
    this.rippleOpacityValue = new Animated.Value(this.state.maxOpacity);
    this.backgroundOpacityValue = new Animated.Value(0);
  }

  onLayout = event => {
    try {
      const { nativeEvent: { layout: { width, height } } } = event;
      const diameter = Math.ceil(Math.sqrt(width * width + height * height));

      this.setState({
        diameter: Math.min(diameter, MAX_DIAMETER)
      });
    } catch (e) {
      this.setState({
        diameter: MAX_DIAMETER
      });
    }
  };

  onPressIn = event => {
    console.log("onpressin");
    const { onPressIn } = this.props;
    // because we need ripple effect to be displayed exactly from press point
    this.setState({
      pressX: event.nativeEvent.locationX,
      pressY: event.nativeEvent.locationY
    });

    if (onPressIn) {
      onPressIn();
    }
  };

  onPress = () => {
    console.log("onPress");
    const { onPress } = this.props;
    const { diameter, maxOpacity } = this.state;

    Animated.parallel([
      Animated.timing(this.backgroundOpacityValue, {
        toValue: maxOpacity / 2,
        duration: 125 + diameter,
        easing: Easing.in(Easing.quad),
        useNativeDriver: true
      }),
      Animated.timing(this.rippleOpacityValue, {
        toValue: 0,
        duration: 125 + diameter,
        useNativeDriver: true
      }),
      // Scale of ripple effect starts at 0 and goes to 1
      Animated.timing(this.rippleScaleValue, {
        toValue: 1,
        duration: 125 + diameter,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true
      })
    ]).start(() => {
      Animated.timing(this.backgroundOpacityValue, {
        toValue: 0,
        duration: 225,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true
      }).start();

      this.setDefaultAnimationValues();
    });

    if (onPress) {
      onPress();
    }
  };

  setDefaultAnimationValues = () => {
    console.log("default");
    const { maxOpacity } = this.state;
    // We can set up scale to 0 and opacity back to maxOpacity
    this.rippleScaleValue.setValue(0);
    console.log(this.rippleScaleValue);
    this.rippleOpacityValue.setValue(maxOpacity);
  };

  renderRippleLayer = () => {
    console.log("rippleLayer");
    const { diameter, pressX, pressY } = this.state;

    return (
      // we need set zindex for iOS, because the components with elevation have the
      // zindex set as well, thus, there could be displayed backgroundColor of
      // component with bigger zindex - and that's not good
      <Animated.View
        key="ripple-view"
        pointerEvents="none"
        style={{
          position: "absolute",
          top: (pressY || 0) - diameter / 2,
          left: (pressX || 0) - diameter / 2,
          width: diameter,
          height: diameter,
          borderRadius: diameter / 2,
          transform: [{ scale: this.rippleScaleValue }],
          opacity: this.rippleOpacityValue,
          backgroundColor: "black"
          // zIndex: ELEVATION_ZINDEX
        }}
      />
    );
  };

  renderBackgroundLayer = () => {
    return (
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "black",
          opacity: this.backgroundOpacityValue
        }}
      />
    );
  };

  render() {
    const {
      title,
      color,
      accessibilityLabel,
      disabled,
      onPress,
      style
    } = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onLayout={this.onLayout}
        underlayColor="#fff"
      >
        <View style={{ ...styles.flatButtonStyle, ...style }}>
          <Text style={styles.titleStyle}>{title}</Text>
          {this.renderRippleLayer()}
          {this.renderBackgroundLayer()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default FlatButton;
