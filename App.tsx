import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  ScheduleScreen,
  TipsScreen,
  AccountScreen,
  WaterTrackingScreen,
} from './Screens';
import {Colours, Typography} from './styles';
import TabBar from './Components/TabBar/index';
import Icon from './Components/Icon';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
          headerShown: false,
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
      <Tab.Screen name="Tips" component={TipsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="TabHome"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WaterTracking"
          component={WaterTrackingScreen}
          options={({navigation, route}) => ({
            headerTitle: 'Water tracking',
            headerTitleStyle: {
              fontWeight: '500',
              fontSize: Typography.fontSize.body,
            },
            headerStyle: {
              backgroundColor: Colours.beige,
            },
            headerBackTitleVisible: false,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: Colours.grey,
                  borderRadius: 25,
                  padding: 3,
                }}>
                <Icon
                  name="Cross"
                  height="20"
                  width="20"
                  stroke={Colours.black}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
