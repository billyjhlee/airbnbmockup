import React, { Component } from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

class Icon extends Component {
  renderIcon = () => {
    let { type, name, size, color } = this.props;
    switch (type) {
      case "material":
        return <MaterialCommunityIcon name={name} size={size} color={color} />;
      case "feather":
        return <FeatherIcon name={name} size={size} color={color} />;
      case "ionicons":
        return <IoniconsIcon name={name} size={size} color={color} />;
    }
  };

  render() {
    return this.renderIcon();
  }
}

export default Icon;
