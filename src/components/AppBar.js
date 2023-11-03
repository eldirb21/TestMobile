/* eslint-disable react-native/no-inline-styles */
import {
  TextInput,
  StatusBar,
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import Icons from './Icons';
import Texts from './Texts';

const Header_Max_Height = 60;

export default function AppBar({
  value,
  onChangeText,
  onSearchClear,
  title,
  backable = false,
  onBack,
  loading = false,
}) {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#F1F1F1'} />

      {backable ? (
        <View style={styles.customContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onBack}
            style={{...styles.icons, marginRight: 5}}>
            <Icons
              type={'Ionicons'}
              name={'chevron-back'}
              size={25}
              color="grey"
            />
          </TouchableOpacity>
          <Texts bold>{title}</Texts>
        </View>
      ) : (
        <Animated.View
          style={{
            ...styles.container,
          }}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={'grey'}
            style={styles.textSearch}
            placeholder="Cari Aset"
          />
          {value ? (
            loading ? (
              <ActivityIndicator
                style={styles.icons}
                color="grey"
                size={'small'}
              />
            ) : (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onSearchClear}
                style={styles.icons}>
                <Icons name={'close'} size={20} color="grey" />
              </TouchableOpacity>
            )
          ) : (
            <View style={styles.icons}>
              <Icons name={'search'} size={20} color="grey" />
            </View>
          )}
        </Animated.View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: Header_Max_Height,
    width: '100%',
    zIndex: 9999,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
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
    paddingLeft: 12,
  },
});
