import react, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Colours, Typography, Sizing} from '../../styles/';
import Icon from '../../Components/Icon';
import ActionButtons from '../../Components/ActionButtons';
import DataPoints from '../../Components/DataPoints';
import moment from 'moment';

const width = Dimensions.get('screen').width;

export default function SleepTrackingScreen() {
  const [datesArray, setDatesArray] = useState([]);

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
      contentContainerStyle={{alignItems: 'center'}}
      style={styles.container}>
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
      <View style={styles.moonContainer}>
        <Icon
          name="Moon"
          width="200"
          height="200"
          fill={Colours.darkYellow}
          style={styles.moon}
        />
        <View style={styles.moonTextContainer}>
          <Text style={styles.subTitle}>Sleep quality</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.largeText}>76</Text>
            <Text style={styles.percentText}>%</Text>
          </View>
          <Text style={{fontSize: Typography.fontSize.smallBody}}>
            You slept better today
          </Text>
        </View>
      </View>
      <View style={styles.sleepDataOuterContainer}>
        <View style={styles.sleepDataContainer}>
          <Text style={styles.sleepDataSubtitle}>FALL ASLEEP</Text>
          <Text style={styles.sleepDataText}>11:22 PM</Text>
        </View>
        <View style={styles.sleepDataContainer}>
          <Text style={styles.sleepDataSubtitle}>WAKE UP</Text>
          <Text style={styles.sleepDataText}>07:12 AM</Text>
        </View>
        <View style={styles.sleepDataContainer}>
          <Text style={styles.sleepDataSubtitle}>DURATION</Text>
          <Text style={styles.sleepDataText}>8:10 H</Text>
        </View>
      </View>
      <ActionButtons
        primaryButtonTitle="Add data"
        secondaryButton1="Refresh"
        secondaryButton2="Send"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'center',
          width: '100%',
          paddingHorizontal: Sizing.l,
        }}>
        <Text
          style={{fontSize: Typography.fontSize.subtitle, fontWeight: '500'}}>
          Summary:
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: Sizing.l,
            paddingVertical: Sizing.m,
            backgroundColor: Colours.black,
            borderRadius: Sizing.l,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: Typography.fontSize.smallBody,
              paddingRight: Sizing.m,
            }}>
            Today
          </Text>
          <AntDesign name="down" size={12} color="white" />
        </TouchableOpacity>
      </View>
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
  moonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Sizing.xl,
  },
  moon: {
    position: 'absolute',
  },
  moonTextContainer: {
    alignItems: 'center',
  },
  largeText: {
    fontFamily: Typography.fontFamily.acorn,
    fontSize: Typography.fontSize.mediumLarge,
  },
  subTitle: {
    fontWeight: '500',
    fontSize: Typography.fontSize.subtitle,
  },
  percentText: {
    paddingVertical: 16,
    paddingHorizontal: 3,
  },
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
  sleepDataOuterContainer: {
    flexDirection: 'row',
    gap: Sizing.xl,
  },
  sleepDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  sleepDataSubtitle: {
    fontSize: Typography.fontSize.smallBody,
    color: Colours.grey,
    fontWeight: '500',
  },
  sleepDataText: {
    fontSize: Typography.fontSize.subtitle,
    fontWeight: '600',
  },
});
