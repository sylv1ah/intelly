import react, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Colours, Sizing, Typography} from '../../styles';
import Icon from '../../Components/Icon';

export default function WaterTrackingScreen() {
  const [goal, setGoal] = useState(15);
  const [progress] = useState(6);
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedInterval, setSelectedInterval] = useState(2);

  const reminderIntervals = [
    {
      id: 0,
      interval: '15 minutes',
    },
    {
      id: 1,
      interval: '30 minutes',
    },
    {
      id: 2,
      interval: '45 minutes',
    },
    {
      id: 3,
      interval: '1 hour',
    },
  ];

  function handleUpdateReminder(selected: number) {
    setSelectedInterval(selected);
    setDropdownOpen(false);
  }

  const Glasses = ({count}) =>
    Array.from({length: count}).map((_item, index) => (
      <View
        key={index}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {index >= progress ? (
          <Icon
            name="Add"
            height="18"
            width="18"
            stroke={Colours.black}
            style={{position: 'absolute', zIndex: 1, bottom: 8}}
          />
        ) : null}
        <Icon
          name="Water"
          height="40"
          width="40"
          fill={index < progress ? Colours.darkBlue : Colours.blue}
        />
      </View>
    ));

  return (
    <ScrollView style={styles.container}>
      <Text style={{...Typography.subHeading}}>Water today</Text>
      <Text style={{...Typography.acornTitle}}>6 of 15 glasses</Text>
      <Text
        style={{fontSize: Typography.fontSize.smallBody, color: Colours.grey}}>
        You have drunk 6/15 glasses of water. Keep going, only 9 glasses left
        for today
      </Text>
      <View style={styles.waterContainer}>
        <Glasses count={goal} />
      </View>
      <View>
        <Text style={{...Typography.subHeading}}>Notification</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Switch
            trackColor={{false: Colours.grey, true: Colours.black}}
            thumbColor={Colours.beige}
            style={{
              transform: [{scaleX: 0.5}, {scaleY: 0.5}],
            }}
            onValueChange={() => setToggle(!toggle)}
            value={toggle}
          />
          <Text style={{fontSize: Typography.fontSize.body, fontWeight: 500}}>
            Remind me to drink water
          </Text>
        </View>
      </View>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.dropdown}
          onPress={() => setDropdownOpen(!dropdownOpen)}>
          <Text style={{fontWeight: '500'}}>
            Every {reminderIntervals[selectedInterval].interval}
          </Text>
        </TouchableOpacity>
        {dropdownOpen ? (
          <View style={styles.dropdownContent}>
            {reminderIntervals.map(int =>
              int.id !== selectedInterval ? (
                <TouchableOpacity
                  key={int.id}
                  onPress={() => handleUpdateReminder(int.id)}>
                  <Text>Every {int.interval}</Text>
                </TouchableOpacity>
              ) : null,
            )}
          </View>
        ) : null}
      </View>
      <View style={styles.goalAveragesContainer}>
        <Icon
          style={styles.waterAccent2}
          name="Water"
          height="50"
          width="50"
          fill={Colours.darkBlue}
        />
        <Icon
          style={styles.waterAccent1}
          name="Water"
          height="100"
          width="100"
          fill={Colours.darkBlue}
        />
        <Text style={Typography.subHeading}>Daily goal: 15 glasses</Text>
        <View style={styles.averageDataContainer}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '800'}}>1.8</Text>
              <Text> l/d</Text>
            </View>
            <Text style={{fontSize: Typography.fontSize.smallBody}}>
              AVERAGE
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '800'}}>1.0</Text>
              <Text> l/d</Text>
            </View>
            <Text style={{fontSize: Typography.fontSize.smallBody}}>
              MINIMUM
            </Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: '800'}}>3.25</Text>
              <Text> l/d</Text>
            </View>
            <Text style={{fontSize: Typography.fontSize.smallBody}}>
              MINIMUM
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.changeButton}>
        <Text style={styles.buttonText}>Change daily goal</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.beige,
    paddingHorizontal: Sizing.l,
  },
  waterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // gap: 3,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    borderRadius: Sizing.l,
    marginVertical: Sizing.m,
  },
  dropdown: {
    backgroundColor: Colours.darkBeige,
    borderRadius: Sizing.l,
    paddingVertical: Sizing.m,
    paddingHorizontal: Sizing.l,
  },
  dropdownContent: {
    paddingVertical: Sizing.l,
    paddingHorizontal: Sizing.l,
    gap: Sizing.l,
  },
  goalAveragesContainer: {
    backgroundColor: Colours.blue,
    padding: Sizing.l,
    borderRadius: Sizing.l,
    marginVertical: Sizing.l,
    overflow: 'hidden',
  },
  waterAccent1: {
    position: 'absolute',
    alignSelf: 'flex-end',
    transform: [{rotate: '-20deg'}],
    top: 25,
    right: 10,
  },
  waterAccent2: {
    position: 'absolute',
    alignSelf: 'flex-end',
    transform: [{rotate: '20deg'}],
    top: 5,
    right: 15,
  },
  averageDataContainer: {
    flexDirection: 'row',
    gap: Sizing.l,
    paddingVertical: Sizing.m,
  },
  changeButton: {
    backgroundColor: Colours.black,
    paddingVertical: Sizing.m,
    paddingHorizontal: Sizing.l,
    borderRadius: Sizing.l,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: '600',
    fontSize: Typography.fontSize.body,
    color: Colours.beige,
  },
});
