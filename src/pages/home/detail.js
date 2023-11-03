import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Texts from '../../components/Texts';
import Func from '../../utils/func';
import {logos} from '../../assets/images';
import AppBar from '../../components/AppBar';

export const Detail = props => {
  const [Item, setItem] = useState(props.route.params);
  return (
    <ImageBackground style={styles.container} source={logos}>
      <AppBar
        backable
        title={Item.symbol}
        onBack={() => props.navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View
          style={{
            padding: 20,
            alignItems: 'center',
          }}>
          <Image
            source={{uri: Item.icon}}
            resizeMode="contain"
            style={styles.image}
          />
          <Texts
            bold
            style={{
              fontSize: 20,
            }}>
            {Item.name}
          </Texts>
        </View>
        <Texts
          style={{color: Item.change?.charAt(0) === '-' ? 'red' : 'green'}}>
          {Item.change?.charAt(0) === '-'
            ? Item.change + '%'
            : `+${Item.change}` + '%'}
        </Texts>
        <Texts bold>{'IDR ' + Func.formatCurrent(Item.price)}</Texts>
        <View>
          <Texts style={{color: '#000'}}>
            {'Vol ' + Func.formatDecimal(Item.vol)}
          </Texts>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF',
    opacity: 0.9,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
});
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
