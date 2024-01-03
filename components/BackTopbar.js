import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackButtonComponent from '../src/SvgComponent/BackButtonComponent';
import {SIZES} from '../constant';

const BackTopbar = ({name, specify}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.backbutton}>
        <BackButtonComponent data={specify} />
      </View>
    </View>
  );
};

export default BackTopbar;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.128,
    marginHorizontal: SIZES.width * 0.051,
    alignItems: 'center',
    marginTop: SIZES.width * 0.026,
    justifyContent: 'center',
  },
  title: {
    color: '#050505',
    fontFamily: 'Inter-Medium',
    fontSize: SIZES.width * 0.051,
    textAlign: 'center',
  },
  backbutton: {
    position: 'absolute',
    left: 0,
  },
});
