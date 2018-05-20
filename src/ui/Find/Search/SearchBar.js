import React, { Component } from "react";
import { View, TextInput } from "react-native";

const styles = {
  containerStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  inputStyle: {
    width: "100%",
    height: "100%",
    borderWidth: 0
  }
};

class SearchBar extends Component {
  render() {
    let { title, chipStyle, titleStyle } = this.props;
    console.log(chipStyle);

    return (
      <View style={styles.containerStyle}>
        <TextInput style={styles.inputStyle} placeholder="Search" />
      </View>
    );
  }
}

export default SearchBar;
