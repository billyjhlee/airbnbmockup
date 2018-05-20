import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

const styles = {
  containerStyle: {
    paddingRight: 10,
    paddingLeft: 10,
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  textInputStyle: {
    width: "100%",
    height: "100%"
  }
};

class IconField extends Component {
  render() {
    let {
      placeholder,
      icon,
      placeholderTextColor,
      containerStyle,
      textInputStyle
    } = this.props;
    return (
      <View style={[styles.containerStyle, containerStyle]}>
        <TextInput
          style={[styles.textInputStyle, textInputStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
        />
      </View>
    );
  }
}

export default IconField;
