import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Texts({
  type = 'poppins',
  medium = false,
  bold = false,
  semiBold = false,
  ...props
}) {
  const defStyle = [
    styles.textDefault,
    type === 'opensans'
      ? {
          fontFamily:
            (medium && 'Poppins-Medium') ||
            (bold && 'Poppins-Bold') ||
            (semiBold && 'Poppins-SemiBold') ||
            'Poppins-Regular',
        }
      : {
          fontFamily:
            (medium && 'OpenSans-Medium') ||
            (bold && 'OpenSans-Bold') ||
            (semiBold && 'OpenSans-SemiBold') ||
            'OpenSans-Regular',
        },
  ];
  const incStyle = Array.isArray(props.style) ? props.style : [props.style];

  return <Text {...props} style={[...defStyle, ...incStyle]} />;
}

const styles = StyleSheet.create({
  textDefault: {
    fontSize: 14,
    color: '#000',
  },
});
