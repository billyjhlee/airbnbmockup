import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Misc extends Component {
  onGoBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <Text>Misc</Text>
        <Button title="Go Back" onPress={this.onGoBackPress} />
      </View>
    );
  }
}

export default Misc;
