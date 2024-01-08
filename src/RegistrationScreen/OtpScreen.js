import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {COLORS, SIZES} from '../../constant';
import Otpcontainer from '../../components/Otpcontainer';
import BackTopbarNew from '../../components/BackTopbarNew';
import Icon from 'react-native-vector-icons/Entypo';

const OtpScreen = ({navigation}) => {
  const [resendTimer, setResendTimer] = useState(10);
  const [isResending, setIsResending] = useState(true);

  useEffect(() => {
    if (isResending) {
      const timer = setInterval(() => {
        if (resendTimer > 0) {
          setResendTimer(resendTimer - 1);
        } else {
          setIsResending(false);
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isResending, resendTimer]);

  const handleResend = () => {
    if (!isResending) {
      setResendTimer(10);
      setIsResending(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 40}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <View>
              <BackTopbarNew name={'One step to complete verification '} />
            </View>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              keyboardShouldPersistTaps="handled">
              <View style={styles.mainContainer}>
                <View>
                  <Text style={styles.optText}>Enter your OTP</Text>
                </View>
                <TouchableOpacity
                  style={styles.changeContainer}
                  onPress={() => navigation.goBack()}>
                  <Text style={styles.changeText}>
                    Change your mobile number?
                  </Text>
                </TouchableOpacity>
                <View style={{marginTop: SIZES.width * 0.05}}>
                  <Otpcontainer />
                </View>
              </View>

              <View style={styles.bottomContainer}>
                <View style={styles.resendContainer}>
                  <TouchableOpacity onPress={handleResend}>
                    <Text style={styles.otpText}>Resend OTP</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.circleContainer}
                  onPress={() => navigation.navigate('SignUpScreen')}>
                  <Icon name="chevron-thin-right" size={24} color={'#fff'} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: SIZES.width * 0.05,
    marginTop: SIZES.width * 0.08,
  },
  // scrollContainer: {
  //   flexGrow: 1,
  //   flex:1
  // },
  bottomContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.width * 0.05,
  },
  optText: {
    fontSize: SIZES.width * 0.04,
    color: '#000',
    fontWeight: '400',
    lineHeight: SIZES.width * 0.051,
  },
  changeText: {
    color: '#446C62',
    fontSize: SIZES.width * 0.04,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.051,
    textDecorationLine: 'underline',
  },
  changeContainer: {
    marginVertical: SIZES.width * 0.03,
  },
  otpText: {
    color: '#446C62',
    fontSize: SIZES.width * 0.04,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.051,
  },
  circleContainer: {
    height: SIZES.width * 0.14,
    width: SIZES.width * 0.14,
    borderRadius: SIZES.width * 0.13,
    backgroundColor: '#00EA77',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
