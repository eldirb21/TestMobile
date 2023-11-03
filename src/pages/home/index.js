/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, ImageBackground, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../services/actions/share.action';
import AppBar from '../../components/AppBar';
import ItemCard from '../../components/ItemCard';
import {logos} from '../../assets/images';

export const Home = props => {
  const translation = useRef(new Animated.Value(-100)).current;
  const scrolly = useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(scrolly, 0, 64);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 64],
    outputRange: [0, -64],
  });
  const [headerShown, setHeaderShown] = useState(false);
  const [Search, setSearch] = useState('');

  useEffect(() => {
    Animated.timing(translation, {
      toValue: !headerShown ? 0 : -100,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);

  useEffect(() => {
    props.fetchData();
  }, []);

  const handleScroll = event => {
    const scrolling = event.nativeEvent.contentOffset.y;
    if (scrolling > 100) {
      setHeaderShown(true);
    } else {
      setHeaderShown(false);
    }
  };
  const handleSearch = val => {
    setSearch(val);
    console.log(Search);
  };

  const renderItem = ({item, index}) => {
    let inputRange = [-1, 0, 150 * index, 150 * (index + 2)];
    let scale = scrolly.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    return (
      <ItemCard
        key={index}
        item={item}
        scale={scale}
        onPressItem={() => props.navigation.navigate('Detail', item)}
      />
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <ImageBackground style={styles.container} source={logos}>
      <AppBar
        translateY={translateY}
        value={Search}
        onChangeText={handleSearch}
        onSearchClear={() => setSearch('')}
      />

      <Animated.FlatList
        scrollEventThrottle={5}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrolly,
                },
              },
            },
          ],
          {
            listener: handleScroll,
            useNativeDriver: true,
          },
        )}
        renderItem={renderItem}
        data={props.share?.Items}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => index.toString()}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    opacity: 0.7,
    backgroundColor: 'rgba(0,0,0,.05)',
  },
});

const mapStateToProps = state => ({
  share: state.share,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
