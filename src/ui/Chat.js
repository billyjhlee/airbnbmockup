import React, { Component } from "react";
import { View, Text } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    flex: 1
  }
};

class Chat extends Component {
  static navigationOptions = {
    title: "CHAT",
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcon name="chat-bubble-outline" size={24} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>Chat</Text>
      </View>
    );
  }
}

export default Chat;
