import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Texts from './Texts';

export default function Buttons({title, ...props}) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.btn} {...props}>
      <Texts semiBold style={styles.btnText}>
        {title}
      </Texts>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'blue',
    borderRadius: 20,
    paddingHorizontal: 20,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#FFF',
  },
});
