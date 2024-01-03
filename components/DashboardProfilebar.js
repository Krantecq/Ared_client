/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SIZES} from '../constant';

const DashboardProfilebar = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.flexDirection}>
          <View>
            <Text
              style={{
                fontSize: SIZES.width * 0.039,
                fontWeight: '400',
                color: '#1D493E',
                marginRight: SIZES.width * 0.026,
              }}>
              Welcome,
            </Text>
            <Text
              style={{
                fontSize: SIZES.width * 0.049,
                fontWeight: '400',
                color: '#1D493E',
                marginRight: SIZES.width * 0.026,
                marginTop: SIZES.width * 0.013,
              }}>
              Kashif Ahmad Khan
            </Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 30,
            width: SIZES.width * 0.128,
            height: SIZES.width * 0.128,
          }}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{width: '100%', height: '100%', borderRadius: 32}}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardProfilebar;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.18,
    // backgroundColor: '#EAFFF5',
    marginHorizontal: SIZES.width * 0.0765,
    borderRadius: 10,
    padding: SIZES.width * 0.026,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    // backgroundColor: 'grey',
  },
});
