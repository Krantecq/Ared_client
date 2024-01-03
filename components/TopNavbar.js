import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconComponet} from '../src/SvgComponent/IconComponet';
import {SIZES} from '../constant';
import {MySvgComponent} from '../src/SvgComponent/AredComponent';

const TopNavbar = () => {
  return (
    <View style={styles.container}>
      <View>
        <MySvgComponent />
      </View>
      <View>
        <IconComponet />
      </View>
    </View>
  );
};

export default TopNavbar;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.128,
    marginHorizontal: SIZES.width * 0.0765,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.width * 0.026,
  },
});
