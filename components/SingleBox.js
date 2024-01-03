import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { SIZES } from '../constant';

const SingleBox = ({title, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexbox}>
        <View>{image}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default SingleBox;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f6fffb',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: SIZES.width * 0.039,
    borderWidth: 0.5,
    borderColor: '#81D1BD',
    borderRadius: 4,
  },
  flexbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#1D493E',
    fontSize: SIZES.width * 0.033,
    fontWeight: '400',
    marginLeft: SIZES.width * 0.026,
  },
});
