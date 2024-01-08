import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../constant';
import {
  ShowComponent,
  HideComponent,
} from '../src/SvgComponent/ShowHideComponent';

const PriceContainer = () => {
  const [show, setShow] = useState(true);
  console.log(SIZES.width * 0.087);
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Hello Shyam Kiran</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title2}>Your carbon emission</Text>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.price}>0000</Text>
        <Text style={styles.price2}> ton Co2</Text>
      </View>
    </View>
  );
};

export default PriceContainer;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.3,
    // backgroundColor: 'grey',
    marginHorizontal: SIZES.width * 0.0765,
    alignItems: 'center',
    // marginBottom: 30,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.063,
    fontWeight: '300',
    marginBottom: SIZES.width * 0.015,
  },
  title2: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.035,
    fontWeight: '300',
  },
  price: {
    color: '#fff',
    fontSize: SIZES.width * 0.087,
    fontWeight: '600',
    lineHeight: SIZES.width * 0.102,
    letterSpacing: -0.5,
    marginTop: SIZES.width * 0.02,
  },
  boxContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    // marginTop: SIZES.width * 0.01,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  price2: {
    color: '#fff',
    fontSize: SIZES.width * 0.05,
    fontWeight: '600',
    lineHeight: SIZES.width * 0.102,
    letterSpacing: -0.5,
    marginTop: SIZES.width * 0.02,
  },
});
