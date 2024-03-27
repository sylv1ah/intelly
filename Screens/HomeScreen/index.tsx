import react, {useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colours, Typography, Sizing} from '../../styles';
import Icon from '../../Components/Icon';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import ActionButtons from '../../Components/ActionButtons';

SplashScreen.preventAutoHideAsync();

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const progressPoints = [
  {
    name: 'water',
    shape: 'Water',
    progress: '3/12 glasses',
    rotation: '10deg',
    paddingTop: 30,
    colour: Colours.blue,
    screenName: 'WaterTracking',
  },
  {
    name: 'pills',
    shape: 'Plus',
    progress: '2/6',
    rotation: '-10deg',
    paddingTop: 0,
    colour: Colours.yellow,
    screenName: 'WaterTracking',
  },
  {
    name: 'heart',
    shape: 'Home',
    progress: '89 bpm',
    rotation: '-20deg',
    paddingTop: 10,
    colour: Colours.pink,
    screenName: 'WaterTracking',
  },
  {
    name: 'habits',
    shape: 'Star4',
    progress: '2/10',
    rotation: '-30deg',
    paddingTop: 0,
    colour: Colours.green,
    screenName: 'WaterTracking',
  },
  {
    name: 'sleep',
    shape: 'Moon',
    progress: '7/8 hours',
    rotation: '10deg',
    paddingTop: 35,
    colour: Colours.yellow,
    screenName: 'SleepTracking',
  },
  {
    name: 'mind',
    shape: 'Star',
    progress: '30/30 min',
    rotation: '0deg',
    paddingTop: 0,
    colour: Colours.blue,
    screenName: 'WaterTracking',
  },
];

export default function HomeScreen({navigation}: Props) {
  const [fontsLoaded, fontError] = useFonts({
    'Acorn-Medium': require('../../assets/fonts/Acorn-Medium.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView
      onLayout={onLayoutRootView}
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
      }}>
      <View style={{height: 50}} />

      <Text style={styles.subTitleText}>Hello, how are you feeling today?</Text>
      <TouchableOpacity style={styles.healthScoreContainer}>
        <View style={styles.starIcon}>
          <Text style={styles.greaterThanArrow}>&gt;</Text>
          <Icon name="Star" fill={Colours.pink} height="40" width="40" />
        </View>
        <Text style={styles.largeText}>8.8</Text>
      </TouchableOpacity>
      <View style={styles.textWithIcon}>
        <Text style={styles.bodyText}>your health score</Text>
        <Icon
          style={styles.icon}
          name="Info"
          height="14"
          width="14"
          stroke={Colours.grey}
          fill={Colours.grey}
        />
      </View>
      <ActionButtons
        primaryButtonTitle="Emergency"
        primaryButtonIcon="Phone"
        secondaryButton1="Stethoscope"
        secondaryButton2="Export"
      />

      <View style={styles.subHeadingContainer}>
        <View>
          <Text style={styles.subTitleText}>Daily highlights</Text>
          <Text style={styles.smallBodyText}>
            Keep going to complete all activities
          </Text>
        </View>
        <Text style={styles.bodyText}>Show all...</Text>
      </View>
      <View style={styles.highlightOuterContainer}>
        {progressPoints.map((point, index) => (
          <TouchableOpacity
            key={index}
            style={styles.highlightContainer}
            onPress={() => navigation.navigate(point.screenName)}>
            <Icon
              style={{
                ...styles.highlightShape,
                transform: [{rotate: point.rotation}],
              }}
              name={point.shape}
              height="160"
              width="160"
              fill={point.colour}
            />
            <View
              style={{
                ...styles.highlightTextContainer,
                paddingTop: point.paddingTop,
              }}>
              <Text style={styles.highlightText}>{point.name}</Text>
              <Text style={styles.highlightTextSmall}>{point.progress}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{height: 100}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colours.beige,
    paddingHorizontal: Sizing.l,
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
    fontFamily: Typography.fontFamily.acorn,
    fontSize: Typography.fontSize.extraLarge,
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
  highlightOuterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  highlightContainer: {
    height: 160,
    width: 160,
  },
  highlightShape: {
    position: 'absolute',
  },
  highlightTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  highlightText: {
    fontFamily: Typography.fontFamily.acorn,
    fontSize: Typography.fontSize.largeBody,
  },
  highlightTextSmall: {
    fontSize: Typography.fontSize.smallBody,
  },
  healthScoreContainer: {
    width: '100%',
    alignItems: 'center',
  },
  starIcon: {
    position: 'absolute',
    marginTop: 20,
    right: 80,
    zIndex: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  greaterThanArrow: {
    position: 'absolute',
    zIndex: 11,
  },
});
