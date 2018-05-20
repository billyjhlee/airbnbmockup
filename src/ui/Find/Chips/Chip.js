import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
// import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
// import FeatherIcon from "react-native-vector-icons/Feather";
import Icon from "../../common/Icon";

const styles = {
  chipContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "#b2bec3",
    borderWidth: 1,
    padding: 10,
    height: "100%"
  },
  titleStyle: {
    fontSize: 12,
    color: "#000"
  }
};

class Chip extends Component {
  onPress = () => {
    console.log(this.props);
    if (this.props.onPress) {
      this.props.onPress();
    }
  };

  renderIcon = () => {
    let { icon } = this.props;
    if (icon) {
      return <Icon type={icon.type} name={icon.name} size={icon.size} />;
      // switch (icon.type) {
      //   case "material":
      //     return <MaterialCommunityIcon name={icon.name} size={icon.size} />;
      //   case "feather":
      //     return <FeatherIcon name={icon.name} size={icon.size} />;
      // }
    }
  };

  renderText = () => {
    console.log(this.props);
    if (this.props.title) {
      return (
        <Text style={[styles.titleStyle, this.props.titleStyle]}>
          {this.props.title}
        </Text>
      );
    }
  };

  render() {
    let { title, chipStyle, titleStyle } = this.props;
    console.log(this.props);

    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={[styles.chipContainerStyle, chipStyle]}>
          {this.renderIcon()}
          {this.renderText()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Chip;
