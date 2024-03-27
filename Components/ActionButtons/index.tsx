import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from '../Icon';
import {Colours, Sizing} from '../../styles';

export default function ActionButtons(props): JSX.Element {
  return (
    <View style={styles.actionButtonsContainer}>
      <TouchableOpacity
        style={{...styles.textWithIcon, ...styles.actionButtonWithText}}>
        <Text style={styles.buttonText}>{props.primaryButtonTitle}</Text>
        {props.primaryButtonIcon ? (
          <Icon
            style={styles.icon}
            name={props.primaryButtonIcon}
            height="25"
            width="25"
            stroke={Colours.beige}
            fill="none"
          />
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon
          name={props.secondaryButton1}
          height="30"
          width="30"
          stroke={Colours.black}
          fill="none"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <Icon
          name={props.secondaryButton2}
          height="30"
          width="30"
          stroke={Colours.black}
          fill="none"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: Sizing.m,
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizing.l,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    // width: '100%',
    gap: Sizing.ml,
  },
  actionButton: {
    backgroundColor: Colours.darkBeige,
    borderRadius: Sizing.xl,
    minWidth: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: Sizing.l,
    marginVertical: Sizing.l,
  },
  actionButtonWithText: {
    backgroundColor: Colours.black,
    borderRadius: Sizing.xl,
    minWidth: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: Sizing.l,
    marginVertical: Sizing.l,
  },
  buttonText: {
    color: Colours.beige,
    fontWeight: '500',
  },
});
