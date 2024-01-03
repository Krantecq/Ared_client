import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  FooterImageComponent,
  X,
  Instagram,
  Linkdin,
  Youtube,
  Thread,
  Whatsapp,
} from '../src/SvgComponent/FooterImageComponent';
import {SIZES} from '../constant';

const FooterImage = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: SIZES.width * 0.8,
        marginTop: SIZES.width * 0.051,
      }}>
      <FooterImageComponent />
      <X />
      <Instagram />
      <Linkdin />
      <Youtube />
      <Thread />
      <Whatsapp />
    </View>
  );
};

export default FooterImage;

const styles = StyleSheet.create({});
