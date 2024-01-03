import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SIZES} from '../constant';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const CancelTopbar = ({name, specify}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.backbutton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={30} color={'#1D493E'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CancelTopbar;

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
    fontSize: SIZES.width * 0.061,
    textAlign: 'center',
  },
  backbutton: {
    position: 'absolute',
    left: 0,
  },
});
