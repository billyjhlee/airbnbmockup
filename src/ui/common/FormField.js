import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

const styles = {
  containerStyle: {
    paddingRight: 10,
    paddingLeft: 10,
    width: "80%",
    // flex: 1,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderRadius: 10
  },
  iconStyle: {
    flex: 1,
    // margin: '0 0 0 2',
    marginRight: 10,
    height: "100%",
    justifyContent: "center"
    // flex: 1
  },
  textInputStyle: {
    flex: 9,
    height: "100%",
    width: "100%",
    justifyContent: "center"
  }
};

class FormField extends Component {
  render() {
    let { textInputProps, placeholder, icon } = this.props;

    console.log(icon);
    return (
      <View style={styles.containerStyle}>
        <View style={styles.iconStyle}>{icon}</View>
        <View style={styles.textInputStyle}>
          <TextInput
            style={{ color: "#fff" }}
            placeholder={placeholder}
            {...textInputProps}
          />
        </View>
      </View>
    );
  }
}

export default FormField;
