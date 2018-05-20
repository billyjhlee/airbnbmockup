import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Type extends Component {
  onGoBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View>
        <Text>Type</Text>
        <Button title="Go Back" onPress={this.onGoBackPress} />
      </View>
    );
  }
}

export default Type;
