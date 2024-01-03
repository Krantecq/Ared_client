import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';

const MyStatusbar = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginTop: SIZES.width * 0.013}}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/profile.png')}
            style={{width: '100%', height: '100%', borderRadius: 50}}
          />
        </View>
        <View style={{marginTop: SIZES.width * 0.039, alignItems: 'center'}}>
          <Text style={styles.title}>Kashif Ahmad Khan</Text>
          <Text style={styles.subtitle}>03390947152719</Text>
        </View>
        <View style={{marginTop: SIZES.width * 0.039, alignItems: 'center'}}>
          <Text style={styles.text}>Total positive impact so far</Text>
          <View style={styles.flexbox}>
            <Text style={styles.points}>0000</Text>
            <Text style={[styles.points, {fontSize: SIZES.width * 0.051}]}> ton Co2</Text>
          </View>
        </View>

        <View></View>
      </View>
    </View>
  );
};

export default MyStatusbar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: SIZES.width * 0.051,
    height: SIZES.height * 0.32,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#c1c1c1',
    alignItems: 'center',
    padding: SIZES.width * 0.051,
  },
  imageContainer: {
    width: SIZES.width * 0.15,
    height: SIZES.height * 0.075,
    borderRadius: 50,
  },
  title: {
    color: '#000',
    fontSize: SIZES.width * 0.041,
    fontWeight: '500',
    lineHeight:  SIZES.width * 0.077,
  },
  subtitle: {
    color: '#000',
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.054,
  },
  text: {
    color: '#000',
    fontSize: SIZES.width * 0.046,
    fontWeight: '300',
  },
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.width * 0.026,
  },
  points: {
    color: '#1D493E',
    fontSize: SIZES.width * 0.079,
    fontWeight: '500',
    lineHeight: SIZES.width * 0.102,
    letterSpacing: -1,
    fontFamily: 'Inter-SemiBold',
  },
});
