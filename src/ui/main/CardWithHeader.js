import React, { Component } from "react";
import { View, Text, Image } from "react-native";

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

class CardWithHeader extends Component {
  render() {
    return (
      <View style={styles.cardStyle}>
        <View style={styles.imageHeaderStyle}>
          <Image source={require("../../../img/soccer.jpg")} />
        </View>
        <View style={styles.bodyStyle}>
          <Text>Header</Text>
        </View>
      </View>
    );
  }
}

export default CardWithHeader;
