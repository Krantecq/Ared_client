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
import React from 'react';
import BackTopbar from '../../components/BackTopbar';
import {COLORS, SIZES} from '../../constant';
import Icon from 'react-native-vector-icons/Entypo';

const CustomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Neutralise'} />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Enter your carbon credits</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={styles.equalContainer}>
            <Text style={styles.topText}>Investment</Text>
            <View style={styles.flexBox}>
              <View>
                <Text style={styles.investText}>500</Text>
              </View>
              <View style={styles.flexBox}>
                <Image
                  source={require('../../assets/images/flag.png')}
                  style={{
                    width: SIZES.width * 0.051,
                    height: SIZES.width * 0.051,
                    resizeMode: 'contain',
                  }}
                />
                <Text style={styles.flegText}>AED</Text>
                <Icon name="chevron-small-down" size={24} color={'#000'} />
              </View>
            </View>
          </View>
          <View style={styles.dividerContainer}>
            <View style={styles.divider}></View>
            <View style={styles.dividerMainContainer}>
              <Text style={styles.dividerText}>AED 1 = 50 Co2 Credits</Text>
            </View>
            <View style={styles.divider}></View>
          </View>
          <View style={styles.equalContainer}>
            <Text style={styles.topText}>Credits</Text>
            <View style={styles.flexBox}>
              <View>
                <Text style={styles.investText}>5000</Text>
              </View>
              <View style={{marginRight: SIZES.width * 0.051}}>
                <Text style={styles.title}>Credits</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.replace('PaymentScreen')}>
            <Text style={styles.btnTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: SIZES.width * 0.051,
  },
  titleContainer: {
    marginTop: SIZES.width * 0.08,
    marginLeft: SIZES.width * 0.03,
  },
  title: {
    fontSize: SIZES.width * 0.04,
    color: '#000',
    fontWeight: '400',
  },
  boxContainer: {
    width: '100%',
    height: SIZES.width * 0.58,
    marginTop: SIZES.width * 0.051,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#CCC',
  },

  equalContainer: {
    width: '100%',
    height: '45%',
    padding: SIZES.width * 0.051,
  },
  dividerContainer: {
    width: '90%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
  divider: {
    width: '20%',
    height: 1,
    backgroundColor: '#CCC',
  },
  dividerMainContainer: {
    width: '60%',
    height: SIZES.width * 0.08,
    backgroundColor: '#F8F8F8',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerText: {
    color: '#446C62',
    fontSize: SIZES.width * 0.035,
    fontWeight: '400',
  },
  flexBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SIZES.width * 0.024,
  },
  investText: {
    color: '#373737',
    fontSize: SIZES.width * 0.098,
    fontWeight: '400',
  },
  flegText: {
    fontSize: SIZES.width * 0.044,
    color: '#1D493E',
    fontWeight: '400',
    marginLeft: SIZES.width * 0.01,
  },
  topText: {
    color: '#868686',
    fontSize: SIZES.width * 0.03,
    fontWeight: '300',
  },
  btn: {
    width: '100%',
    height: SIZES.height * 0.06,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.057,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.051,
    fontWeight: '600',
  },
});
