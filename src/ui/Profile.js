import React, { Component } from "react";
import { View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    flex: 1
  }
};

class Profile extends Component {
  static navigationOptions = {
    title: "PROFILE",
    tabBarIcon: ({ tintColor }) => (
      <FeatherIcon name="user" size={24} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;
