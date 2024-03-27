import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Colours, Typography, Sizing} from '../../styles';
import Icon from '../Icon';

export default function DataHighlight(props): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Icon
          name={props.shape}
          width={props.size}
          height={props.size}
          fill={props.colour}
          style={styles.shape}
        />
        <View style={styles.textContainer}>
          <Text style={styles.subTitle}>{props.data.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text style={styles.largeText}>{props.data.value}</Text>
            <Text style={styles.percentText}>{props.data.param}</Text>
          </View>
          <Text style={{fontSize: Typography.fontSize.smallBody}}>
            {props.data.subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.dataOuterContainer}>
        {props.data.extraData.map(x => (
          <View style={styles.dataContainer}>
            <Text style={styles.dataSubtitle}>{x.title}</Text>
            <Text style={styles.dataText}>{x.value}</Text>
          </View>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Sizing.xl,
  },
  shape: {
    position: 'absolute',
  },
  textContainer: {
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

  dataOuterContainer: {
    flexDirection: 'row',
    gap: Sizing.xl,
  },
  dataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  dataSubtitle: {
    fontSize: Typography.fontSize.smallBody,
    color: Colours.grey,
    fontWeight: '500',
  },
  dataText: {
    fontSize: Typography.fontSize.subtitle,
    fontWeight: '600',
  },
});
