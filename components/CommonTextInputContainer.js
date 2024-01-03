import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';

const CommonTextInputContainer = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={{
          flex: 1,
          fontSize: SIZES.width * 0.033,
          paddingLeft: SIZES.width * 0.051,
          color: '#000',
        }}
        placeholderTextColor={'#898989'}
        keyboardType="default"
        numberOfLines={1}
      />
    </View>
  );
};

export default CommonTextInputContainer;

const styles = StyleSheet.create({
  container: {
    height: 55,
    borderColor: COLORS.borderColor,
    borderWidth: 0.5,
    borderRadius: 4,
  },
});
