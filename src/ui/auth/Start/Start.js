import React, { Component } from "react";
import { View, Text } from "react-native";
import { StackNavigator } from "react-navigation";
import Header from "./Header";
import Body from "./Body/Body";

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  headerContainerStyle: {
    flex: 2
  },
  bodyContainerStyle: {
    flex: 3
  }
};

class Start extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.headerContainerStyle}>
          <Header />
        </View>
        <View style={styles.bodyContainerStyle}>
          <Body navigation={this.props.navigation} />
        </View>
      </View>
    );
  }
}

export default Start;
