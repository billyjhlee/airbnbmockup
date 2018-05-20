import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  TabBarTop
} from "react-navigation";
import Start from "../ui/auth/Start/Start";

import Find from "../ui/Find/Find";
import BookMarks from "../ui/BookMarks";
import History from "../ui/History";
import Chat from "../ui/Chat";
import Profile from "../ui/Profile";

import Capacity from "../ui/Filters/Capacity";
import DateAndTime from "../ui/Filters/DateAndTime";
import Misc from "../ui/Filters/Misc";
import Type from "../ui/Filters/Type";

const MainTabs = TabNavigator(
  {
    Find: {
      screen: Find
    },
    BookMarks: {
      screen: BookMarks
    },
    History: {
      screen: History
    },
    Chat: {
      screen: Chat
    },
    Profile: {
      screen: Profile
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarComponent: TabBarTop,
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: "none",
    tabBarOptions: {
      showIcon: true,
      pressColor: "#dfe6e9",
      inactiveTintColor: "#2d3436",
      activeTintColor: "#ff5a60",
      indicatorStyle: {
        height: 0
      },
      style: {
        backgroundColor: "#fff",
        padding: 0,
        margin: 0
      },
      iconStyle: {
        padding: 0,
        margin: 0
      },
      tabStyle: {
        padding: 0,
        padding: 0,
        margin: 0
      },
      labelStyle: {
        fontSize: 10,
        padding: 0,
        margin: 0
      },
      tabStyle: {}
    }
  }
);

const MainStack = StackNavigator(
  {
    MainTabs: {
      screen: MainTabs
    },
    CapacityFilter: {
      screen: Capacity
    },
    DateAndTimeFilter: {
      screen: DateAndTime
    },
    MiscFilter: {
      screen: Misc
    },
    TypeFilter: {
      screen: Type
    }
  },
  {
    headerMode: "none",
    title: "app"
  }
);

const PrimaryNav = StackNavigator(
  {
    AuthScreen: {
      screen: Start
    },
    MainStack: {
      screen: MainStack
    }
  },
  {
    headerMode: "none",
    title: "App",
    initialRouteName: "MainStack"
  }
);

export default PrimaryNav;
