/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Texts from './Texts';
import Func from '../utils/func';

export default function ItemCard({item, scale, onPressItem}) {
  return (
    <Animated.View
      style={{
        transform: [{scale}],
        ...styles.itemCard,
      }}>
      <TouchableOpacity
        onPress={onPressItem}
        activeOpacity={0.5}
        style={styles.cardbtn}>
        <Image
          source={{uri: item.icon}}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.subs}>
          <View style={styles.content}>
            <Texts style={styles.simbol}>{item.symbol}</Texts>
            <Texts style={styles.colorGreen}>
              {'Vol ' + Func.formatDecimal(item.vol)}
            </Texts>
          </View>
          <View style={styles.itemRight}>
            <View
              style={{
                ...styles.parsenContent,
                backgroundColor:
                  item.change?.charAt(0) === '-' ? 'red' : 'green',
              }}>
              <Texts style={{color: '#FFF'}}>
                {item.change?.charAt(0) === '-'
                  ? item.change + '%'
                  : `+${item.change}` + '%'}
              </Texts>
            </View>
            <View>
              <Text style={{color: '#000'}}>
                {'IDR ' + Func.formatCurrent(item.price)}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  itemCard: {
    opacity: 0.7,
    padding: 20,
    backgroundColor: '#FFF',
    zIndex:9999
  },
  cardbtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  subs: {
    marginLeft: 20,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  simbol: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 4,
  },
  colorGreen: {
    color: 'green',
  },
  itemRight: {
    alignItems: 'flex-end',
  },
  parsenContent: {
    width: 70,
    alignItems: 'center',
    padding: 2,
    borderRadius: 100,
    marginBottom: 4,
  },
});
