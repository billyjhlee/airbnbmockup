import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";

import HorizontalScrollBar from "./HorizontalScrollBar";

const styles = {
  cardStyle: {
    flex: 1
  },
  imageHeaderStyle: {
    flex: 3
  },
  imageStyle: {
    width: "100%",
    height: "100%"
  },
  bodyStyle: {
    flex: 2
  }
};

class Main extends Component {
  render() {
    return (
      <View style={styles.cardStyle}>
        <Text>Hello</Text>
        <Button title="ang" />
      </View>
    );
  }
}

export default Main;
