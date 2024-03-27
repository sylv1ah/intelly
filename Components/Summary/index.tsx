import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colours, Typography, Sizing} from '../../styles';
import {AntDesign} from '@expo/vector-icons';

export default function Summary(props): JSX.Element {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        paddingHorizontal: Sizing.l,
      }}>
      <Text style={{fontSize: Typography.fontSize.subtitle, fontWeight: '500'}}>
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
  );
}
