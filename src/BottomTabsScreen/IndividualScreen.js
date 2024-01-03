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
import BackTopbar from '../../components/BackTopbar';
import BackTopbarNew from '../../components/BackTopbarNew';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CommonTextInputContainer from '../../components/CommonTextInputContainer';
import FlagTextInput from '../../components/FlagTextInput';
import ImageUploadContainer from '../../components/ImageUploadContainer';
import Otpcontainer from '../../components/Otpcontainer';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';

const IndividualScreen = ({navigation}) => {
  const Country = ['India', 'Dubai', 'Nepal'];
  const State = ['Delhi', 'Punjab', 'Lucknow'];
  const Gender = ['Male', 'Female'];
  const [date, setDate] = useState('');
  const [support, setSupport] = useState(false);

  const handleOptionSelect = selectedOption => {
    console.log('Selected:', selectedOption);
  };

  const handleSupport = () => {
    setSupport(!support);
  };

  if (support == true) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'transparent'} />
        <View>
          <BackTopbar name={'Successful'} />
        </View>
        <View
          style={[styles.mainContainer, {alignItems: 'center', marginTop: 20}]}>
          <View>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none">
              <Path
                d="M26.5001 48.5833C38.6459 48.5833 48.5834 38.6458 48.5834 26.5C48.5834 14.3542 38.6459 4.41666 26.5001 4.41666C14.3542 4.41666 4.41675 14.3542 4.41675 26.5C4.41675 38.6458 14.3542 48.5833 26.5001 48.5833Z"
                stroke="#1D493E"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                opacity="0.34"
                d="M17.1145 26.4998L23.3641 32.7494L35.8853 20.2502"
                stroke="#1D493E"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: '#737373',
                fontSize: 14,
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: 22,
              }}>
              Thank you for submitting your request for support. We will be in
              touch with you shortly.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <BackTopbarNew name={'Onboard as Individual'} />
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.maincontainer}>
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
          <View style={{marginTop: 13}}>
            <FlagTextInput />
          </View>
          <View style={{marginTop: 13}}>
            <Text
              style={{
                color: '#898989',
                fontSize: 13,
                fontWeight: '400',
                marginBottom: 5,
              }}>
              Enter OTP
            </Text>
            <Otpcontainer />
          </View>

          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'Email'} />
          </View>

          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'Country'} />
          </View>
          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'State/Emirates'} />
          </View>
          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'Create Password'} />
          </View>
          <View style={{marginTop: 13}}>
            <ImageUploadContainer
              options={State}
              onSelect={handleOptionSelect}
              placeholder={'Profile Upload'}
            />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btncontainer}
              onPress={() => handleSupport()}>
              <Text style={styles.btnTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.description}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.descriptionText}>
                By continuing, you're agreeing to our{' '}
              </Text>
              <TouchableOpacity>
                <Text style={styles.bold}>Customer Terms of Service,</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Text style={styles.bold}>Privacy Policy, </Text>
              </TouchableOpacity>
              <Text style={styles.descriptionText}>and </Text>
              <TouchableOpacity>
                <Text style={styles.bold}>Cookie Policy.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default IndividualScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  mainContainer: {
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  maincontainer: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  titlecontainer: {
    width: '100%',
    height: 30,
  },
  title: {
    fontSize: 24,
    color: COLORS.btn,
    lineHeight: 28,
    letterSpacing: -0.48,
    fontFamily: 'Inter-Bold',
  },
  subtitlecontainer: {
    marginTop: 24,
    width: '100%',
    height: 20,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.btn,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
  },
  textinputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  btn: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.btn,
    marginTop: 22,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
  },
  btncontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    width: '100%',
    height: 38,
    marginTop: 19,
  },
  descriptionText: {
    fontSize: 11,
    fontWeight: '300',
    lineHeight: 20,
    color: '#000',
  },
  bold: {
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 20,
    color: '#000',
  },
});
