import {View, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Texts from './Texts';

const {height} = Dimensions.get('window');

export default function ItemEmpty() {
  return (
    <View style={styles.container}>
      <Texts bold style={styles.text}>
        No data Found!
      </Texts>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    opacity: 0.9,
  },
  text: {
    color: 'grey',
  },
});
