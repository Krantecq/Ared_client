import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SIZES} from '../constant';
import SignUpScreen from '../src/RegistrationScreen/SignUpScreen';

const TableComponent = () => {
  return (
    <View style={styles.table}>
      <View style={{width: '40%', borderRightWidth: 1,borderColor:'#B9B9B9'}}>
        <Row value={'Date:'} />
        <Row value={'Transaction ID:'} />
        <Row value={'Project:'} />
        <Row value={'User Name:'} />
        <Row value={'Carbon Credits'} />
        <Row value={'Paid Amount:'} />
        <Row value={'You Earned:'} />
      </View>
      <View style={{width: '60%'}}>
        <Row value={'21-07-23 14:47:33'} />
        <Row value={'230721131720793050'} />
        <Row value={'Solar Project'} />
        <Row value={'VMC Laundry'} />
        <Row value={'5000'} />
        <Row value={'AED 500'} />
        <Row value={'AED 500'} />
      </View>
    </View>
  );
};

const Row = ({value}) => (
  <View style={styles.row}>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  table: {
    borderWidth: 0.7,
    borderColor: '#B9B9B9',
    margin: SIZES.width * 0.02,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#B9B9B9',
    padding: SIZES.width * 0.02,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: SIZES.width * 0.03,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
  value: {
    flex: 1,
    fontSize: SIZES.width * 0.03,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
});

export default TableComponent;
