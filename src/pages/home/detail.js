/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import Texts from '../../components/Texts';
import Func from '../../utils/func';
import {logos} from '../../assets/images';
import AppBar from '../../components/AppBar';

export const Detail = props => {
  const [Item] = useState(props.route.params);

  return (
    <ImageBackground style={styles.container} source={logos}>
      <AppBar
        backable
        title={Item.symbol}
        onBack={() => props.navigation.goBack()}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.contentContainer}>
          <View style={styles.containerLogo}>
            <Image
              source={{uri: Item.icon}}
              resizeMode="contain"
              style={styles.image}
            />
            <Texts bold style={styles.name}>
              {Item.name}
            </Texts>
          </View>
          <Texts
            style={{color: Item.change?.charAt(0) === '-' ? 'red' : 'green'}}>
            {Item.change?.charAt(0) === '-'
              ? Item.change + '%'
              : `+${Item.change}` + '%'}
          </Texts>
          <Texts bold>{Item.pair + ' ' + Func.formatCurrent(Item.price)}</Texts>
          <View style={styles.volContent}>
            <Texts semiBold>{'Vol ' + Func.formatDecimal(Item.vol)}</Texts>
          </View>

          <View style={styles.containerSession}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollSession}>
              <View style={styles.itemSession}>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Low '}</Texts>
                  <Texts semiBold style={styles.valItem}>
                    {Func.formatCurrent(Item.low)}
                  </Texts>
                </View>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'High '}</Texts>
                  <Texts semiBold style={styles.valItem}>
                    {Func.formatCurrent(Item.high)}
                  </Texts>
                </View>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Volume '}</Texts>
                  <Texts semiBold style={styles.valItem}>
                    {Func.formatDecimal(Item.volume_coin)}
                  </Texts>
                </View>
              </View>
              <View style={styles.itemSession}>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Fee '}</Texts>
                  <Texts semiBold style={[styles.valItem, styles.itemWidth]}>
                    {Item.taker_fee}
                  </Texts>
                </View>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Pre. Price '}</Texts>
                  <Texts semiBold style={[styles.valItem, styles.itemWidth]}>
                    {Item.price_precision}
                  </Texts>
                </View>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Pre. qyt '}</Texts>
                  <Texts semiBold style={[styles.valItem, styles.itemWidth]}>
                    {Item.quantity_precision}
                  </Texts>
                </View>
              </View>

              <View style={styles.itemSession}>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Min simbol '}</Texts>
                  <Texts semiBold style={styles.valItem}>
                    {Item.min_symbol_transaction}
                  </Texts>
                </View>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Min pair '}</Texts>
                  <Texts semiBold style={styles.valItem}>
                    {Item.min_pair_transaction}
                  </Texts>
                </View>
                <View style={styles.itemSessionObject}>
                  <Texts style={styles.labelItem}>{'Min sell '}</Texts>
                  <Texts semiBold style={styles.valItem}>
                    {Item.min_sell_huobi}
                  </Texts>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 40,
  },
  containerLogo: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  name: {
    fontSize: 20,
  },
  containerSession: {
    height: 100,
    backgroundColor: '#FFF',
    opacity: 0.8,
    marginTop: 100,
    marginBottom: 10,
  },
  scrollSession: {
    flexDirection: 'row',
    maxHeight: 100,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  volContent: {
    marginTop: 10,
  },
  itemSession: {
    backgroundColor: 'rgba(0,0,0,.03)',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 0,
    margin: 5,
  },
  itemSessionObject: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 3,
  },
  labelItem: {
    width: 80,
  },
  valItem: {
    textAlign: 'right',
  },
  itemWidth: {
    width: 45,
  },
});
const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
