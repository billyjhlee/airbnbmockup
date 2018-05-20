import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import Search from "./Search/Search";

const styles = {
  containerStyle: {
    backgroundColor: "#fff",
    flex: 1
  }
};

class Find extends Component {
  static navigationOptions = {
    title: "FIND",
    tabBarIcon: ({ tintColor }) => (
      <FeatherIcon name="search" size={24} color={tintColor} />
    )
  };

  onDateAndTimeFilterOpen = () => {
    this.props.navigation.navigate("DateAndTimeFilter");
  };

  onCapacityFilterOpen = () => {
    this.props.navigation.navigate("CapacityFilter");
  };

  onMiscFilterOpen = () => {
    this.props.navigation.navigate("MiscFilter");
  };

  onTypeFilterOpen = () => {
    this.props.navigation.navigate("TypeFilter");
  };

  getChipOnPress = chipTitle => {
    switch (chipTitle) {
      case "Date and Time":
        return this.onDateAndTimeFilterOpen;
      case "Capacity":
        return this.onCapacityFilterOpen;
      case "Facility":
        return this.onTypeFilterOpen;
      case "Price":
        return this.onMiscFilterOpen;
      default:
        return;
    }
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Search filterNavigation={this.getChipOnPress} />
        {/* <Text>Find</Text>
        <Button onPress={this.onDateAndTimeFilterOpen} title="DateAndTime" />
        <Button onPress={this.onCapacityFilterOpen} title="Capacity" />
        <Button onPress={this.onTypeFilterOpen} title="Type" />
        <Button onPress={this.onMiscFilterOpen} title="Misc" /> */}
      </View>
    );
  }
}

export default Find;
