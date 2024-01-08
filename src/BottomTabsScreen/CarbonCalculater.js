/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import Svg, {Path, Line} from 'react-native-svg';

const CarbonCalculater = ({navigation}) => {
  console.log(SIZES.width * 0.035, 's');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Calculate your footprint'} />
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.boxContainer}
          onPress={() => navigation.navigate('IndiviualCalculater')}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/carbon2.png')}
              style={{resizeMode: 'contain', width: '100%', height: '100%'}}
            />
          </View>
          <Text style={styles.title}>Individual</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CarbonCalculater;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    height: SIZES.height - 200,
    width: SIZES.width,
    alignItems: 'center',
    padding: SIZES.width * 0.03,
    justifyContent: 'center',
  },
  boxContainer: {
    width: SIZES.width - 60,
    height: '40%',
    // backgroundColor: '#e8fff3',
    borderRadius: SIZES.width * 0.035,
    borderWidth: 1,
    borderColor: '#00EA77',
    alignItems: 'center',
    padding: SIZES.width * 0.05,

    // justifyContent: 'center',
  },
  textContainer: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#446C62',
    fontSize: SIZES.width * 0.042,
    fontWeight: '400',
  },
  imageContainer: {
    width: '50%',
    height: '75%',
    // backgroundColor:'#000'
  },
  title: {
    color: '#1D493E',
    fontSize: SIZES.width * 0.05,
    fontWeight: '400',
    marginTop: SIZES.width * 0.03,
  },
});
