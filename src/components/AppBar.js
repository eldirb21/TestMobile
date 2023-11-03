/* eslint-disable react-native/no-inline-styles */
import {
  TextInput,
  StatusBar,
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icons from './Icons';
import Texts from './Texts';

const Header_Max_Height = 64;
const Header_Min_Height = 0;
const Scroll_Distance = Header_Max_Height - Header_Min_Height;

export default function AppBar({
  translateY,
  value,
  onChangeText,
  onSearchClear,
  title,
  backable = false,
  onBack,
}) {
  return backable ? (
    <View style={styles.customContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onBack}
        style={{...styles.icons, marginRight: 5}}>
        <Icons type={'Ionicons'} name={'chevron-back'} size={25} />
      </TouchableOpacity>
      <Texts bold>{title}</Texts>
    </View>
  ) : (
    <Animated.View
      style={{
        ...styles.container,
        transform: [{translateY: translateY}],
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#F1F1F1'} />

      <View style={styles.searchContainer}>
        <View style={styles.icons}>
          <Icons name={'search'} size={20} />
        </View>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={'grey'}
          style={styles.textSearch}
          placeholder="Search"
        />
        {value && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onSearchClear}
            style={styles.icons}>
            <Icons name={'close'} size={20} />
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'flex-end',
    height: 55,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 9999,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  customContainer: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    zIndex: 9999,
    paddingHorizontal: 5,
  },
  icons: {
    width: 40,
    alignItems: 'center',
    height: 55,
    justifyContent: 'center',
    paddingTop: 3,
  },
  textSearch: {
    flex: 1,
    color: '#000',
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    height: '100%',
  },
});
