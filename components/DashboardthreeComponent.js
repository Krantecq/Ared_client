import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import {useNavigation} from '@react-navigation/native';

const DashboardthreeComponent = () => {
  const navigation = useNavigation();
  console.log(SIZES.width * 0.174);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dividerContainer}
        onPress={() => navigation.navigate('ProjectScreen')}>
        <Image
          source={require('../assets/images/house.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Projects</Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
      <TouchableOpacity
        style={styles.dividerContainer}
        onPress={() => navigation.navigate('IndiviualCalculater')}>
        <Image
          source={require('../assets/images/calculater.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Carbon Calculater</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardthreeComponent;

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerContainer: {
    width: '49%',
    height: '100%',
    alignItems: 'center',
  },
  image: {
    width: SIZES.width * 0.174,
    height: SIZES.width * 0.174,
    resizeMode: 'contain',
  },
  title: {
    width: '30%',
    textAlign: 'center',
    color: '#000',
    fontSize: SIZES.width * 0.03,
    marginTop: SIZES.width * 0.02,
  },
  divider: {
    borderLeftWidth: 1,
    borderColor: '#9D9D9D',
    width: '2%',
    height: '100%',
  },
});
