import React, { Component } from "react";
import { View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    flex: 1
  }
};

class History extends Component {
  static navigationOptions = {
    title: "HISTORY",
    tabBarIcon: ({ tintColor }) => (
      <FeatherIcon name="list" size={24} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>History</Text>
      </View>
    );
  }
}

export default History;
