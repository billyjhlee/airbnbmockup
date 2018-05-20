import React, { Component } from "react";
import { View, Text } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    flex: 1
  }
};

class BookMarks extends Component {
  static navigationOptions = {
    title: "BOOKMARKS",
    tabBarIcon: ({ tintColor }) => (
      <FeatherIcon name="bookmark" size={24} color={tintColor} />
    )
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>BookMarks</Text>
      </View>
    );
  }
}

export default BookMarks;
