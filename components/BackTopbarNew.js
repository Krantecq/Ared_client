import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackButtonComponent from '../src/SvgComponent/BackButtonComponent';

const BackTopbarNew = ({name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.backbutton}>
        <BackButtonComponent />
      </View>
    </View>
  );
};

export default BackTopbarNew;

const styles = StyleSheet.create({
  container: {
    height: 50,
    marginHorizontal: 15,
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    // fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 28,
    paddingLeft: 20,
  },
  backbutton: {
    position: 'absolute',
    left: 0,
  },
});
