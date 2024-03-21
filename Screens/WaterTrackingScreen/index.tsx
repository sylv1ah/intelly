import react, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colours, Sizing, Typography} from '../../styles';
import Icon from '../../Components/Icon';

export default function WaterTrackingScreen() {
  const [goal, setGoal] = useState(15);
  return (
    <ScrollView style={styles.container}>
      <Text style={{...Typography.subHeading}}>Water Today</Text>
      <Text style={{...Typography.acornTitle}}>6 of 15 glasses</Text>
      <Text
        style={{fontSize: Typography.fontSize.smallBody, color: Colours.grey}}>
        You have drunk 6/15 glasses of water. Keep going, only 9 glasses left
        for today
      </Text>
      <View style={styles.waterContainer}>
        {/* water drops list here */}
        <Icon name="Water" height="50" width="50" fill={Colours.darkBlue} />
      </View>
      <View>
        <Text>Notification</Text>
        {/* notification toggle here */}
      </View>
      <View>
        <Text>Daily goal: 15 glasses</Text>
        <TouchableOpacity>
          <Text>Change daily goal</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.beige,
    paddingHorizontal: Sizing.l,
  },
  waterContainer: {},
});
