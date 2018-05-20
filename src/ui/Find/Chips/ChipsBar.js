import React, { Component } from "react";
import { View, Text } from "react-native";
import Chip from "./Chip";

const Chips = [
  {
    flex: 2,
    title: "Date and Time",
    chipStyle: {
      backgroundColor: "#fff",
      width: "90%"
    },
    titleStyle: {
      color: "#000"
    }
  },
  {
    flex: 1,
    title: "Facility",
    chipStyle: { backgroundColor: "#fff", width: "90%" }
  },
  {
    flex: 1,
    title: "Capacity",
    chipStyle: { backgroundColor: "#fff", width: "90%" }
  },
  {
    flex: 1,
    title: "Price",
    chipStyle: { backgroundColor: "#fff", width: "90%" }
  }
];

const styles = {
  chipsBarStyle: {
    width: "100%",
    flexDirection: "column"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
};

class ChipsBar extends Component {
  // renderChips = () => {
  //   return Chips.map((chip, index) => {
  //     let onPress = this.props.onPresses(chip.title);
  //     return (
  //       <View
  //         key={`chip${index}`}
  //         style={{
  //           flex: chip.flex,
  //           justifyContent: "center",
  //           alignItems: "center",
  //           height: "100%"
  //         }}
  //       >
  //         <Chip
  //           onPress={onPress}
  //           title={chip.title}
  //           chipStyle={{
  //             backgroundColor: "#fff",
  //             width: "90%"
  //           }}
  //           ang="gg"
  //           titleStyle={chip.titleStyle}
  //           icon={<MaterialCommunityIcon name="calendar-clock" />}
  //         />
  //       </View>
  //     );
  //   });
  // };

  render() {
    let { onPresses, containerStyle } = this.props;
    return (
      <View style={[styles.chipsBarStyle, containerStyle]}>
        <Chip
          onPress={onPresses("Date and Time")}
          title="Date and Time"
          chipStyle={{
            backgroundColor: "#fff",
            width: "100%",
            height: 60,
            marginBottom: 16,
            borderWidth: 0,
            elevation: 1
          }}
          icon={{ type: "material", size: 24, name: "calendar-clock" }}
          // titleStyle={chip.titleStyle}
        />
        <View
          style={{
            ...styles.center,
            width: "100%",
            height: 60,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              width: "50%",
              paddingRight: 8
            }}
          >
            <Chip
              onPress={onPresses("Facility")}
              title="Facility"
              chipStyle={{
                backgroundColor: "#fff",
                width: "100%",
                height: "100%",
                borderWidth: 0,
                elevation: 1
              }}
              icon={{ type: "material", size: 24, name: "home-outline" }} // titleStyle={chip.titleStyle}
            />
          </View>
          <View
            style={{
              width: "50%",
              paddingLeft: 8
            }}
          >
            <Chip
              onPress={onPresses("Capacity")}
              title="Capacity"
              chipStyle={{
                backgroundColor: "#fff",
                width: "100%",
                height: "100%",
                borderWidth: 0,
                elevation: 1
              }}
              icon={{ type: "feather", size: 24, name: "users" }} // titleStyle={chip.titleStyle}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default ChipsBar;
