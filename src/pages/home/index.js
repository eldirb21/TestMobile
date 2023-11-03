/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, ImageBackground, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchData, fetchDataFilter} from '../../services/actions/share.action';
import AppBar from '../../components/AppBar';
import ItemCard from '../../components/ItemCard';
import {logos} from '../../assets/images';
import ItemEmpty from '../../components/ItemEmpty';

export const Home = props => {
  const scrolly = useRef(new Animated.Value(0)).current;
  const [Search, setSearch] = useState('');

  useEffect(() => {
    props.fetchData();
  }, []);

  const handleSearch = val => {
    setSearch(val);
    props.fetchDataFilter(val, props.share?.Items);
  };

  const renderSeparator = () => <View style={styles.separator} />;
  const renderEmpty = () => <ItemEmpty />;

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

  return (
    <ImageBackground style={styles.container} source={logos}>
      <AppBar
        value={Search}
        onChangeText={handleSearch}
        onSearchClear={() => setSearch('')}
      />

      <Animated.FlatList
        style={styles.flatList}
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
            useNativeDriver: true,
          },
        )}
        renderItem={renderItem}
        data={props.share?.Items}
        ItemSeparatorComponent={renderSeparator}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={renderEmpty}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    backgroundColor: '#FFF',
    opacity: 0.9,
  },
  separator: {
    height: 1,
    opacity: 0.9,
    backgroundColor: 'rgba(0,0,0,.05)',
  },
});

const mapStateToProps = state => ({
  share: state.share,
});

const mapDispatchToProps = {
  fetchData,
  fetchDataFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
