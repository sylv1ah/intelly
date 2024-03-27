import react, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Colours, Typography, Sizing} from '../../styles/';
import Icon from '../../Components/Icon';
import ActionButtons from '../../Components/ActionButtons';
import DataPoints from '../../Components/DataPoints';
import CalendarScroll from '../../Components/CalendarScroll';
import DataHighlight from '../../Components/DataHighlight';
import Summary from '../../Components/Summary';

const data = {
  title: 'Sleep quality',
  value: 76,
  param: '%',
  subtitle: 'You slept better today',
  extraData: [
    {
      title: 'FALL ASLEEP',
      value: '11:22 PM',
    },
    {
      title: 'WAKE UP',
      value: '07:12 AM',
    },
    {
      title: 'DURATION',
      value: '8:10 H',
    },
  ],
};

const dataPoints = [
  {
    name: 'AWAKE',
    value: '14',
    param: 'min',
  },
  {
    name: 'LIGHT',
    value: '05:45',
    param: 'h',
  },
  {
    name: 'DEEP',
    value: '01:30',
    param: 'h',
  },
];

export default function SleepTrackingScreen() {
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
      <CalendarScroll />
      <DataHighlight
        shape="Moon"
        size={200}
        colour={Colours.darkYellow}
        data={data}
      />

      <ActionButtons
        primaryButtonTitle="Add data"
        secondaryButton1="Refresh"
        secondaryButton2="Send"
      />
      <Summary />
      <DataPoints dataPoints={dataPoints} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.yellow,
    width: '100%',
  },
});
