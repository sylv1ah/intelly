import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colours, Typography, Sizing} from '../../styles';

export default function DataPoints(props): JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
        gap: Sizing.l,
        paddingHorizontal: Sizing.l,
        paddingVertical: Sizing.m,
      }}>
      {props.dataPoints.map((point, index) => (
        <View key={index} style={{}}>
          <View style={{flexDirection: 'row', gap: Sizing.xs}}>
            <Text style={{fontWeight: '800'}}>{point.value}</Text>
            <Text style={{}}>{point.param}</Text>
          </View>
          <Text
            style={{
              fontSize: Typography.fontSize.smallBody,
              color: Colours.grey,
            }}>
            {point.name}
          </Text>
        </View>
      ))}
    </View>
  );
}
