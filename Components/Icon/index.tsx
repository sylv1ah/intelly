import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svgs from './svgs';

const Icon = props => (
  <SvgIcon {...props} svgs={svgs} onPress={props.onPress} />
);
export default Icon;
