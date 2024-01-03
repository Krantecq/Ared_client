import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES} from '../constant';
import BackButtonComponent from '../src/SvgComponent/BackButtonComponent';

const BackButton = () => {
  return (
    <View style={styles.container}>
      <BackButtonComponent />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    height: SIZES.height * 0.12,
    justifyContent: 'flex-end',
    paddingHorizontal: SIZES.width * 0.051,
    // backgroundColor:'#211'
  },
});
