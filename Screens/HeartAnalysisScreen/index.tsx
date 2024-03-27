import React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Colours, Typography, Sizing} from '../../styles';
import CalendarScroll from '../../Components/CalendarScroll';
import DataHighlight from '../../Components/DataHighlight';
import ActionButtons from '../../Components/ActionButtons';
import Summary from '../../Components/Summary';
import DataPoints from '../../Components/DataPoints';

const data = {
  title: 'Heart rate',
  value: 123,
  param: 'bpm',
  subtitle: 'Your heart rate is high',
  extraData: [
    {
      title: 'PRESSURE',
      value: '120/70',
    },
    {
      title: 'RR INTERVAL',
      value: '780 ms',
    },
  ],
};

const dataPoints = [
  {
    name: 'AVERAGE',
    value: '75',
    param: 'bpm',
  },
  {
    name: 'MINIMUM',
    value: '54',
    param: 'bpm',
  },
  {
    name: 'MAXIMUM',
    value: '123',
    param: 'bpm',
  },
];

export default function HeartAnalysisScreen() {
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
      <CalendarScroll />
      <DataHighlight
        shape="Home"
        size={250}
        colour={Colours.darkPink}
        data={data}
      />
      <ActionButtons
        primaryButtonTitle="Make measurement"
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
    backgroundColor: Colours.pink,
  },
});
