/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constant';
import CancelTopbar from '../../components/CancelTopbar';

const PaymentScreen = ({navigation}) => {
  const [selectedPayment, setSelectedPayment] = useState('card');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View>
        <CancelTopbar name={'Payment'} />
      </View>
      <ScrollView
        style={{marginBottom: SIZES.width * 0.026}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.boxContainer}>
            <View style={styles.flexContainer}>
              <View style={{width: '50%'}}>
                <Text style={styles.title}>Amount :</Text>
                <Text style={styles.title}> Vat:</Text>
                <Text style={styles.title}>Total Amount :</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.price}>AED 95</Text>
                <Text style={styles.price}>AED 5</Text>
                <Text style={styles.price}> AED 100</Text>
              </View>
            </View>
          </View>
          <View style={styles.diffrenece}>
            <View>
              <Text style={{color: '#000', fontSize: SIZES.width * 0.045}}>
                Choose your payment method
              </Text>
            </View>
            <TouchableOpacity
              style={[
                styles.paymentBox,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderColor:
                    selectedPayment === 'card' ? '#00EA77' : COLORS.borderColor,
                },
              ]}
              onPress={() => setSelectedPayment('card')}>
              <View style={{width: '60%'}}>
                <Text style={styles.text}>Debit/Credit/ATM Cards</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '40%',
                  alignItems: 'flex-start',
                }}>
                <Image
                  source={require('../../assets/images/payment1.png')}
                  style={{
                    width: '20%',
                    resizeMode: 'contain',
                    height: SIZES.width * 0.15,
                  }}
                />
                <Image
                  source={require('../../assets/images/payment2.png')}
                  style={{
                    width: '20%',
                    resizeMode: 'contain',
                    height: SIZES.width * 0.15,
                    marginLeft: SIZES.width * 0.03,
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentBox,
                {
                  borderColor:
                    selectedPayment === 'bank' ? '#00EA77' : COLORS.borderColor,
                },
              ]}
              onPress={() => setSelectedPayment('bank')}>
              <Text style={styles.text}>Bank Account</Text>
            </TouchableOpacity>
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.btncontainer}
                onPress={() => navigation.navigate('SuccessfullScreen')}>
                <Text style={styles.btnTitle}>Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: SIZES.width * 0.051,
  },
  boxContainer: {
    height: SIZES.width * 0.34,
    marginTop: SIZES.width * 0.05,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: COLORS.borderColor,
  },
  title: {
    fontSize: SIZES.width * 0.03,
    color: '#727272',
    fontWeight: '400',
    marginBottom: SIZES.width * 0.05,
    textAlign: 'left',
  },
  price: {
    fontSize: SIZES.width * 0.03,
    color: '#000',
    fontWeight: '400',
    marginBottom: SIZES.width * 0.05,
    textAlign: 'right',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.width * 0.05,
  },
  diffrenece: {
    marginTop: SIZES.width * 0.07,
  },
  paymentBox: {
    height: SIZES.width * 0.17,
    marginTop: SIZES.width * 0.03,
    borderRadius: 4,
    padding: SIZES.width * 0.05,
    borderWidth: 0.5,
    borderColor: COLORS.borderColor,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter-SemiBold',
    fontSize: SIZES.width * 0.035,
    color: '#000',
    letterSpacing: 0.3,
  },
  btn: {
    width: '100%',
    height: SIZES.width * 0.122,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.052,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.051,
    fontWeight: '600',
  },
  btncontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
