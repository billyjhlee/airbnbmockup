import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

const styles = {
  containerStyle: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  line: {
    flex: 1,
    height: 1.5,
    backgroundColor: "black"
  },
  label: {
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    color: "black",
    fontSize: 10
  }
};

class SeparatorWithLabel extends Component {
  renderLine = key => {
    return <View key={key} style={[styles.line, this.props.lineStyle]} />;
  };

  renderText = key => {
    return (
      <View key={key}>
        <Text style={[styles.label, this.props.labelStyle]}>
          {this.props.label}
        </Text>
      </View>
    );
  };

  renderInner = () => {
    if (!this.props.label) {
      return this.renderLine();
    }
    return [this.renderLine(1), this.renderText(2), this.renderLine(3)];
  };

  render() {
    const { containerStyle } = this.props;
    return (
      <View
        style={[
          styles.containerStyle,
          containerStyle,
          {
            marginLeft: this.props.marginLeft,
            marginRight: this.props.marginRight
          }
        ]}
      >
        {this.renderInner()}
      </View>
    );
  }
}

SeparatorWithLabel.propTypes = {
  lineStyle: PropTypes.shape({}),
  label: PropTypes.string,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  labelStyle: PropTypes.shape({})
};

SeparatorWithLabel.defaultProps = {
  marginLeft: 8,
  marginRight: 8
};

export default SeparatorWithLabel;
