# Test Mobile

#### Wellcome to Test Mobile App.

##### [RELEASE DOWNLOAD](https://github.com/eldirb21/TestMobile/releases)

## Features

```sh
- Auth
- List
- Detail
- Responsive
```

## Libraries

- [@react-navigation/native](https://github.com/react-navigation/react-navigation) `6.1.9`
- [@react-navigation/stack](https://github.com/react-navigation/react-navigation) `6.3.20`
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv) `3.4.9`
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler) `2.13.4`
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) `4.7.4`
- [react-native-screens](https://github.com/software-mansion/react-native-screens) `3.27.0`
- [react-native-sqlite-storage](https://github.com/andpor/react-native-sqlite-storage) `6.0.1`
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) `10.0.1`

- [react-native-asset](https://github.com/unimonkiez/react-native-asset) `2.1.1`
- [redux](https://redux.js.org) `4.2.1`
- [react-redux](https://react-redux.js.org) `8.1.3`
- [redux-thunk](https://github.com/reduxjs/redux-thunk) `2.4.2`
- [@reduxjs/toolkit](https://redux-toolkit.js.org/) `1.9.7`

## SCREENSHOT

---


<div style="background-color: #DEFFE1; padding: 20px;">
    <img src="screenshot/signin.png" width="20%">
    <img src="screenshot/list.png" width="20%">
    <img src="screenshot/detail.png" width="20%">
    <img src="screenshot/responsive.png" width="20%">
</div>

---

## Get Started

#### 1. Installation IOS AND ANDROID

On the command prompt run the following commands

```sh
$ git clone https://github.com/eldirb21/TestMobile.git

$ cd TestMobile

$ npm i && cd ios && pod install && cd ..
```

#### 2. Simulate for iOS

```sh
$ npm run ios
```

#### 3. Simulate for Android

```sh
$ npm run android
```

#### 4. Clean Android

```sh
$ cd android && ./gradlew clean && ./gradlew --stop && cd ..
```

#### 5. Release Android

```sh
$ cd android && ./gradlew clean && ./gradlew assemblerelease && cd ..
```
