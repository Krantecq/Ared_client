import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constant';
import BackButton from '../../components/BackButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonTextInputContainer from '../../components/CommonTextInputContainer';
import DatePickerComponent from '../../components/DatePickerComponent';

const SignUpScreen = ({navigation}) => {
  const [date, setDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <BackButton />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.maincontainer}>
          <View style={styles.titlecontainer}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          <View style={styles.subtitlecontainer}>
            <Text style={styles.subtitle}>
              Enter your person’s details below
            </Text>
          </View>
        </View>
        <View style={styles.textinputContainer}>
          <View>
            <CommonTextInputContainer placeholder={'Name'} />
          </View>

          <View style={{marginTop: SIZES.width * 0.033}}>
            <CommonTextInputContainer placeholder={'Email Address'} />
          </View>
          <View style={{marginTop: SIZES.width * 0.033}}>
            <DatePickerComponent setDate={setDate} placeholder={'DOB'} />
          </View>

          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btncontainer}
              onPress={() => navigation.navigate('CarbonCalculater')}>
              <Text style={styles.btnTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  maincontainer: {
    marginHorizontal: SIZES.width * 0.064,
    marginTop: SIZES.width * 0.026,
  },
  titlecontainer: {
    width: '100%',
    height: SIZES.width * 0.0765,
  },
  title: {
    fontSize: SIZES.width * 0.062,
    color: '#446C62',
    lineHeight: SIZES.width * 0.07,
    letterSpacing: -0.48,
    fontFamily: 'Inter-Bold',
  },
  subtitlecontainer: {
    marginTop: SIZES.width * 0.01,
    width: '100%',
    height: SIZES.width * 0.051,
  },
  subtitle: {
    fontSize: SIZES.width * 0.031,
    color: '#446C62',
    fontFamily: 'Inter-Regular',
    lineHeight: SIZES.width * 0.049,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: SIZES.width * 0.0765,
  },
  textinputContainer: {
    marginHorizontal: SIZES.width * 0.051,
    marginTop: SIZES.width * 0.051,
  },
  btn: {
    width: '100%',
    height: SIZES.height * 0.06,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.057,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.051,
    fontWeight: '600',
  },
  btncontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
