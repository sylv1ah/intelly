import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, ScheduleScreen, TipsScreen, AccountScreen} from './Screens';
import {Colours} from './styles';
import TabBar from './Components/TabBar/index';
import Icon from './Components/Icon';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarLabel: () => null,
        headerStyle: {},
        headerShadowVisible: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // headerShown: false,
          headerTitle: () => null,
          headerStyle: {
            backgroundColor: Colours.beige,
          },
          tabBarIcon: ({focused}) => (
            <Icon
              name="ExportIcon"
              width="30"
              height="30"
              stroke={Colours.pink}
              fill="none"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="ExportIcon"
              width="30"
              height="30"
              stroke={Colours.pink}
              fill="none"
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Fab"
        component={() => {
          return null;
        }}
      /> */}
      <Tab.Screen name="Tips" component={TipsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
