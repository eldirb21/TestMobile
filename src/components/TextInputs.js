/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Texts from './Texts';
import Icons from './Icons';

export default function TextInputs({
  style,
  errors = '',
  iconLeft = 'person',
  securePassword = false,
  ...props
}) {
  const [secureTextEntry, setsecureTextEntry] = useState(securePassword);

  return (
    <View style={styles.container}>
      <View style={[styles.body, {borderColor: errors ? 'red' : '#FFF'}]}>
        <View style={styles.icons}>
          <Icons name={iconLeft} size={20} color="grey" />
        </View>
        <TextInput
          underlineColorAndroid={'transparent'}
          secureTextEntry={securePassword && secureTextEntry}
          textContentType="none"
          style={styles.textInput}
          placeholderTextColor={'grey'}
          {...props}
        />
        {securePassword && (
          <TouchableOpacity
            onPress={() => setsecureTextEntry(!secureTextEntry)}
            style={styles.icons}>
            <Icons
              type="Ionicons"
              name={!secureTextEntry ? 'eye' : 'eye-off'}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        )}
        {errors && (
          <View style={styles.icons}>
            <Icons
              type="Ionicons"
              name={'information-circle-outline'}
              size={25}
              color="red"
            />
          </View>
        )}
      </View>
      {errors && (
        <Texts type="opensans" style={styles.textError}>
          {errors}
        </Texts>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    height: 50,
    color: '#000',
    textDecorationLine: 'none',
    textDecorationColor: 'transparent',
    fontFamily: 'OpenSans-Regular',
  },
  textError: {
    color: 'red',
  },
  body: {
    borderWidth: 1,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
  },
  icons: {
    width: 40,
    alignItems: 'center',
  },
});
