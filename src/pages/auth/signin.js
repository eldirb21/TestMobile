/* eslint-disable curly */
import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import TextInputs from '../../components/TextInputs';
import Icons from '../../components/Icons';
import Texts from '../../components/Texts';
import Buttons from '../../components/buttons';
import {email, passwordID} from '@env';
import {logos} from '../../assets/images';

export const Signin = props => {
  const [errors, seterrors] = useState({});
  const [Inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const handleChange = (key, val) => {
    let newInput = {...Inputs};
    formValidate(key, true);
    newInput[key] = val;
    setInputs(newInput);
  };

  const formValidate = (key, isForm) => {
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passPattern = /^@(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/;

    let newError = {...errors};
    if (isForm) {
      if (newError[key]) newError[key] = '';
      seterrors(newError);
    } else {
      if (Inputs.email === '') {
        newError.email = 'Please Enter a valid email';
        seterrors(newError);
        return true;
      } else if (!emailPattern.test(Inputs.email)) {
        newError.email = 'Invalid email address';
        seterrors(newError);
        return true;
      } else if (Inputs.password === '') {
        newError.password = 'Please Enter a valid password';
        seterrors(newError);
        return true;
      } else if (!passPattern.test(Inputs.password)) {
        newError.password = 'Invalid password';
        seterrors(newError);
        return true;
      } else {
        seterrors({});
        return false;
      }
    }
  };
  const handleLogin = () => {
    if (!formValidate()) {
      if (Inputs.email === email && Inputs.password === passwordID) {
        props.navigation.navigate('Home');
      } else {
        Alert.alert('Failed', 'Account not Found!', [
          {text: 'Close', onPress: () => console.log('OK Pressed')},
        ]);
      }
    }
  };
  return (
    <ImageBackground style={styles.containerImage} source={logos}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#F1F1F1'} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Icons type="Ionicons" name="person-circle-outline" size={100} />
          <Texts bold style={styles.title}>
            Sign In
          </Texts>
        </View>
        <TextInputs
          value={Inputs.email}
          onChangeText={val => handleChange('email', val)}
          errors={errors.email}
          placeholder="Enter Email"
        />
        <TextInputs
          value={Inputs.password}
          onChangeText={val => handleChange('password', val)}
          errors={errors.password}
          securePassword
          iconLeft="key"
          placeholder="Enter Password"
        />

        <Buttons title={'Masuk ke Akun'} onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    opacity: 0.8,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    paddingHorizontal: 20,
    padding: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
