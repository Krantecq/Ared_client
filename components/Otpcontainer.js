/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {COLORS, SIZES} from '../constant';

const Otpcontainer = () => {
  const [otp, setOtp] = useState('');
  return (
    <View>
      <OTPInputView
        style={{
          width: '80%',
          height: SIZES.width * 0.128,
          // alignSelf: 'center',
        }}
        pinCount={4}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          setOtp(code);
        }}
      />
    </View>
  );
};

export default Otpcontainer;

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: SIZES.width * 0.15,
    height: SIZES.width * 0.15,
    borderWidth: 0.5,
    borderRadius: 9,
    borderColor: COLORS.borderColor,
    color: COLORS.black,
  },

  underlineStyleHighLighted: {
    borderColor: '#00EA77',
    borderWidth: 2,
  },
});
