/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Texts from './Texts';

export default function Buttons({title, loading = false, ...props}) {
  return (
    <TouchableOpacity
      style={{...styles.btn, backgroundColor: loading ? 'grey' : 'blue'}}
      disabled={loading}
      activeOpacity={0.7}
      {...props}>
      <Texts semiBold style={styles.btnText}>
        {loading ? 'Mohon tunggu' : title}
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
