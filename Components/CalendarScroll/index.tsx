import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import moment from 'moment';
import {Colours, Typography, Sizing} from '../../styles';

const width = Dimensions.get('screen').width;

export default function CalendarScroll(props): JSX.Element {
  const [datesArray, setDatesArray] = useState([]);

  const todaysDate = new Date().getDate();

  function getDates() {
    const date = moment();
    var startDate = date.subtract(8, 'days');
    var dates = Array(15)
      .fill({day: '', date: 0})
      .map(() => startDate.add(1, 'day').format('dd DD'));

    const calendar = dates.map(d => ({
      day: d.split(' ')[0].toUpperCase(),
      date: Number(d.split(' ')[1]),
    }));

    return calendar;
  }

  useEffect(() => {
    setDatesArray(getDates());
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      directionalLockEnabled={true}
      showsHorizontalScrollIndicator={false}
      contentOffset={{x: width / 2}}
      style={styles.calendarContainer}>
      {datesArray.map((value, index) => (
        <View
          key={index}
          style={{
            ...styles.calendarDateContainer,
            backgroundColor: value.date === todaysDate ? Colours.black : null,
            borderRadius: value.date === todaysDate ? Sizing.xl : null,
          }}>
          <Text
            style={{
              ...styles.calendarDayText,
              color: value.date === todaysDate ? 'white' : Colours.grey,
            }}>
            {value.day}
          </Text>
          <Text
            style={{
              ...styles.calendarDateText,
              color: value.date === todaysDate ? 'white' : null,
              fontWeight: value.date === todaysDate ? '800' : '600',
            }}>
            {value.date}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    flexDirection: 'row',
  },
  calendarDateContainer: {
    marginVertical: Sizing.m,
    marginHorizontal: Sizing.m,
    paddingVertical: Sizing.ml,
    width: 34,
    gap: 8,
    alignItems: 'center',
  },
  selectedCalendarDateContainer: {
    backgroundColor: Colours.black,
    borderRadius: Sizing.xl,
  },
  calendarDayText: {
    fontSize: Typography.fontSize.body,
    color: Colours.grey,
    fontWeight: '400',
  },
  calendarDateText: {
    fontSize: Typography.fontSize.body,
    fontWeight: '600',
  },
});
