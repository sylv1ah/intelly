import react from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colours, Typography, Sizing} from '../../styles';
import Icon from '../../Components/Icon';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitleText}>Hello, how are you feeling today?</Text>
      <Text style={styles.largeText}>8.8</Text>
      <View style={styles.textWithIcon}>
        <Text style={styles.bodyText}>your health score</Text>
        <Icon
          style={styles.icon}
          name="InfoIcon"
          height="14"
          width="14"
          stroke={Colours.grey}
          fill={Colours.grey}
        />
      </View>
      <View style={styles.actionButtonsContainer}>
        <View style={{...styles.textWithIcon, ...styles.actionButtonWithText}}>
          <Text style={styles.buttonText}>Emergency</Text>
          <Icon
            style={styles.icon}
            name="PhoneIcon"
            height="20"
            width="20"
            stroke={Colours.beige}
            fill="none"
          />
        </View>
        <View style={styles.actionButton}>
          <Icon
            name="StethoscopeIcon"
            height="20"
            width="20"
            stroke={Colours.black}
            fill="none"
          />
        </View>
        <View style={styles.actionButton}>
          <Icon
            name="ExportIcon"
            height="20"
            width="20"
            stroke={Colours.black}
            fill="none"
          />
        </View>
      </View>
      <View style={styles.subHeadingContainer}>
        <View>
          <Text style={styles.subTitleText}>Daily highlights</Text>
          <Text style={styles.smallBodyText}>
            Keep going to complete all activities
          </Text>
        </View>
        <Text style={styles.bodyText}>Show all...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colours.beige,
    marginHorizontal: Sizing.l,
  },
  subTitleText: {
    fontSize: Typography.fontSize.subtitle,
    fontWeight: '500',
  },
  bodyText: {
    fontSize: Typography.fontSize.body,
    color: Colours.grey,
    textAlign: 'center',
  },
  smallBodyText: {
    fontSize: Typography.fontSize.smallBody,
  },
  largeText: {
    ...Typography.acornMediumLarge,
  },
  icon: {
    marginLeft: Sizing.m,
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizing.l,
  },
  subHeadingContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
  },
  actionButton: {
    backgroundColor: Colours.darkBeige,
    borderRadius: Sizing.l,
    minWidth: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Sizing.l,
    marginVertical: Sizing.l,
  },
  actionButtonWithText: {
    backgroundColor: Colours.black,
    borderRadius: Sizing.l,
    minWidth: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Sizing.l,
    marginVertical: Sizing.l,
  },
  buttonText: {
    color: Colours.beige,
    fontWeight: '500',
  },
});
