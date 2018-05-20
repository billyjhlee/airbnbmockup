import React, { Component } from "react";
import { View, TouchableNativeFeedback, Text, Platform } from "react-native";

const styles = {
  flatButtonStyle: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 10
  },
  labelStyle: {
    fontSize: 16
  }
};

class FlatButtonDroid extends Component {
  render() {
    const {
      label,
      containerStyle,
      labelStyle,
      onPress,
      touchableStyle
    } = this.props;
    return (
      <TouchableNativeFeedback
        useForeground
        background={
          Platform.Version > 21
            ? TouchableNativeFeedback.Ripple("rgba(0, 0, 0, 0.3)", true)
            : TouchableNativeFeedback.SeletableBackgroundBorderless()
        }
        onPress={onPress}
        style={touchableStyle}
      >
        <View style={[styles.flatButtonStyle, containerStyle]}>
          <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default FlatButtonDroid;
