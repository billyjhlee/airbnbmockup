import React, { Component } from "react";
import { View, Text, Button } from "react-native";

import { Calendar } from "react-native-calendars";

const styles = {
  calendar: {
    // borderTopWidth: 1,
    // paddingTop: 5,
    // borderBottomWidth: 1,
    // borderColor: "#eee",
    // height: 350
  }
};
class DateAndTime extends Component {
  constructor() {
    super();
    this.state = {
      currDate: new Date(),
      markedDates: []
    };
  }

  translateDate = (year, month, day) => {
    console.log(year, month, day);
    return year + "-" + month + "-" + day;
  };

  formatMarkedDates = () => {
    let markedDates = {};
    this.state.markedDates.forEach((date, index) => {
      markedDates[date.dateString] = { color: "green" };
      if (index === 0) {
        markedDates[date.dateString].startingDay = true;
      }
      if (index === this.state.markedDates.length - 1) {
        markedDates[date.dateString].endingDay = true;
        markedDates[date.dateString].seleted = true;
      }
    });
    return markedDates;
  };

  onGoBackPress = () => {
    this.props.navigation.goBack();
  };

  // 0 = day1 is later,
  // 1 = equal,
  // 2 = day2 is later
  dayComparator = (day1, day2) => {
    if (day1.year > day2.year) {
      return 0;
    } else if (day1.year === day2.year) {
      if (day1.month > day2.month) {
        return 0;
      } else if (day1.month === day2.month) {
        if (day1.day > day2.day) {
          return 0;
        } else if (day1.day === day2.day) {
          return 1;
        }
      }
    }
    return 2;
  };

  updateMarkedDates = day => {
    let { markedDates } = this.state;
    let newMarkedDates = [];
    if (markedDates.length === 1) {
      newMarkedDates = markedDates.slice();
      let before = this.dayComparator(markedDates[0], day);
      console.log(before);
      if (before === 0) {
        newMarkedDates[0] = day;
        this.setState({ markedDates: newMarkedDates });
      } else {
        newMarkedDates[1] = day;
        this.setState({ markedDates: newMarkedDates });
      }
    } else {
      newMarkedDates[0] = day;
      this.setState({ markedDates: newMarkedDates });
    }
  };

  onDayPress = day => {
    this.updateMarkedDates(day);
    // console.log(this.formatMarkedDates());
  };

  render() {
    console.log(this.state.markedDates);
    console.log(this.formatMarkedDates());

    let { currDate } = this.state;

    return (
      <View>
        <Calendar
          style={styles.calendar}
          // Initially visible month. Default = Date()
          current={currDate}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={currDate}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={"2018-05-30"}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            this.onDayPress(day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"MMMM yyyy"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          // hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={direction => <Arrow />}
          // Do not show days of other months in month page. Default = false
          // hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          // disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          markingType={"period"}
          // markedDates={{
          //   "2018-05-20": { textColor: "green" },
          //   "2018-05-22": { startingDay: true, color: "green" },
          //   "2018-05-23": {
          //     selected: true,
          //     endingDay: true,
          //     color: "green",
          //     textColor: "gray"
          //   },
          //   "2018-05-04": {
          //     disabled: true,
          //     startingDay: true,
          //     color: "green",
          //     endingDay: true
          //   }
          // }}
          markedDates={this.formatMarkedDates()}
          // Hide day names. Default = false
          // hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          // onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          // onPressArrowRight={addMonth => addMonth()}
        />
        <Button title="Go Back" onPress={this.onGoBackPress} />
      </View>
    );
  }
}

export default DateAndTime;
