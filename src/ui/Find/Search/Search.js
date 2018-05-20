import React, { Component } from "react";
import { View, Animated, Easing, Text } from "react-native";
import SearchBar from "./SearchBar";
import ChipsBar from "../Chips/ChipsBar";
import Chip from "../Chips/Chip";
import Icon from "../../common/Icon";
import FlatButtonDroid from "../../common/FlatButtonDroid";

const styles = {
  containerStyle: {
    padding: 16,
    paddingBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eeeeee"
  }
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      openFilters: false
    };
  }

  onFilterPress = () => {
    this.setState({
      openFilters: true
    });
  };

  onSavePress = () => {
    this.setState({
      openFilters: false
    });
  };

  render() {
    let { filterNavigation } = this.props;

    return (
      <Animated.View style={styles.containerStyle}>
        {/* <SearchBar /> */}
        <Chip
          title="Search"
          chipStyle={{
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
            height: 40,
            borderWidth: 0,
            elevation: 1,
            marginBottom: 16,
            flexDirection: "row"
          }}
          icon={{ type: "feather", size: 24, name: "search" }}
        />
        {!this.state.openFilters && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Chip
              onPress={this.onFilterPress}
              chipStyle={{
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderWidth: 0,
                borderRadius: 100,
                elevation: 1
              }}
              icon={{ type: "ionicons", size: 24, name: "ios-options" }}
            />

            {/* <Icon type="ionicons" name="ios-options" size={24} />
          <Text>Filters</Text> */}
          </View>
        )}
        {this.state.openFilters && (
          <View style={{ width: "100%", height: "auto" }}>
            <ChipsBar
              onPresses={filterNavigation}
              containerStyle={{ marginBottom: 16 }}
            />
            <FlatButtonDroid
              onPress={this.onSavePress}
              label="Save"
              containerStyle={{
                elevation: 1,
                backgroundColor: "#ff5a60"
              }}
              labelStyle={{
                color: "#fff"
              }}
            />
          </View>
        )}
      </Animated.View>
    );
  }
}

export default Search;
