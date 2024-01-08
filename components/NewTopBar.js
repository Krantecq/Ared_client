import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  IconComponet,
  WhiteIconComponet,
} from '../src/SvgComponent/IconComponet';
import {SIZES} from '../constant';
import {MySvgComponent, Whitelogo} from '../src/SvgComponent/AredComponent';

const NewTopBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Whitelogo />
      </View>
      <View>
        <WhiteIconComponet />
      </View>
    </View>
  );
};

export default NewTopBar;

const styles = StyleSheet.create({
  container: {
    height: SIZES.width * 0.128,
    marginHorizontal: SIZES.width * 0.0765,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:
      Platform.OS === 'ios' ? SIZES.width * 0.026 : SIZES.width * 0.026,
  },
});
