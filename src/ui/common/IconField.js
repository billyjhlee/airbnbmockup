import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

const styles = {
  containerStyle: {
    paddingRight: 10,
    paddingLeft: 10,
    width: "80%",
    height: 40,
    flexDirection: "row",
    justifyCoooontent: "center",
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  iconStyle: {
    flex: 1,
    marginRight: 10,
    height: "100%",
    justifyContent: "center"
  },
  textInputStyle: {
    flex: 9,
    height: "100%",
    width: "100%",
    justifyContent: "center"
  }
};

class IconField extends Component {
  render() {
    let { placeholder, icon } = this.props;
    return (
      <View style={styles.containerStyle}>
        <View style={styles.iconStyle}>{icon}</View>
        <View style={styles.textInputStyle}>
          <TextInput style={{ width: "100%" }} placeholder={placeholder} />
        </View>
      </View>
    );
  }
}

export default IconField;
