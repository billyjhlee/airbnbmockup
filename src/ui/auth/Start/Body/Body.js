import React, { Component } from "react";
import { View } from "react-native";

import Options from "./Options";
import Login from "./Login/Login";
// import RippleButton from '../../common/RippleButton';

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "#fff"
  }
};

class Body extends Component {
  constructor() {
    super();
    this.state = {
      page: "Options"
    };
  }

  // getPrevPage = currPage => {
  //   switch (currPage) {
  //     case 'Login':
  //       return 'Options'
  //     default:
  //       break
  //   }
  // }

  // handleHardwareBackPress = () => {
  //   if (this.state.page !== 'Options') {
  //     this.setState({page: this.getPrevPage(this.state.page)})
  //     return true
  //   }
  //   return false;
  // }
  navigateToOptions = () => {
    this.setState({ page: "Options" });
  };

  // componentDidMount() {
  //   // FOR ANDROID ONLY - change later
  //   BackHandler.addEventListener('hardwareBackPress', this.handleHardwareBackPress)
  // }

  onSignUpPress = () => {
    console.log("pressed");
  };

  onLoginPress = () => {
    console.log("loginPressed");
    this.setState({ page: "Login" });
  };

  renderContent = () => {
    switch (this.state.page) {
      case "Options":
        return (
          <Options
            onLoginPress={this.onLoginPress}
            onSignUpPress={this.onSignUpPress}
          />
        );
      case "Login":
        return (
          <Login
            navigation={this.props.navigation}
            navigateToOptions={this.navigateToOptions}
          />
        );
      default:
        break;
    }
  };

  render() {
    return <View style={styles.containerStyle}>{this.renderContent()}</View>;
  }
}

export default Body;
