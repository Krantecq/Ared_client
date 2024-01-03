import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import TransactionComponent from '../../components/TransactionComponent';
import {transaction} from '../../constant/data';
import BackTopbar from '../../components/BackTopbar';

const LeadersScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <BackTopbar name={'Payments'} />
      </View>
      <View style={styles.flexbox}>
        <View style={styles.singleContainer}>
          <Text style={styles.title}>Total Investments</Text>
          <Text style={styles.price}>$ 94.88</Text>
        </View>
        <View style={styles.singleContainer}>
          <Text style={styles.title}>Total positive impact</Text>
          <Text style={styles.price}>0000</Text>
          <Text style={[styles.price, {fontSize: SIZES.width * 0.026}]}>
            ton co2
          </Text>
        </View>
      </View>
      <View style={styles.transaction}>
        <Text style={styles.transactionText}>Transactions</Text>
        <View style={{height: SIZES.height * 0.7}}>
          <TransactionComponent data={transaction} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LeadersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flexbox: {
    flexDirection: 'row',
    height: SIZES.height * 0.12,
    marginHorizontal: SIZES.width * 0.0765,
    justifyContent: 'space-between',
    marginTop: SIZES.width * 0.0765,
  },
  singleContainer: {
    width: '48%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#CCC',
    alignItems: 'center',
    marginTop: SIZES.width * 0.026,
    paddingTop: SIZES.width * 0.03,
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.033,
    fontWeight: '300',
    lineHeight: SIZES.width * 0.0765,
  },
  price: {
    color: '#1D493E',
    fontFamily: 'Inter-Medium',
    fontSize: SIZES.width * 0.062,
    letterSpacing: -0.4,
  },
  transaction: {
    marginHorizontal: SIZES.width * 0.0765,
    marginTop: SIZES.width * 0.0765,
  },
  transactionText: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.041,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.0765,
  },
});
