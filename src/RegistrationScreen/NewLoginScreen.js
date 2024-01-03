/* eslint-disable react-native/no-inline-styles */
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import {MyLogoComponent} from '../SvgComponent/AredComponent';
import NewFlagText from '../../components/NewFlagText';
import {COLORS, SIZES} from '../../constant';
import {Apple, Google} from '../SvgComponent/IconComponet';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const NewLoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <View style={styles.equalContainer}>
            <Animatable.Image
              source={require('./../../assets/images/new-4.jpeg')}
              animation={'zoomIn'}
              delay={200}
              style={styles.image}
            />
            <Animatable.Image
              source={require('./../../assets/images/new-5.jpeg')}
              animation={'zoomIn'}
              delay={200}
              style={[
                styles.image,
                {
                  marginHorizontal: SIZES.width * 0.0,
                  marginTop: -SIZES.width * 0.13,
                },
              ]}
            />
            <Animatable.Image
              source={require('./../../assets/images/new-6.jpeg')}
              style={styles.image}
              animation={'zoomIn'}
              delay={200}
            />
          </View>
          <View style={styles.logoContainer}>
            <MyLogoComponent />
          </View>
          <View
            style={[styles.equalContainer, {marginTop: SIZES.width * 0.05}]}>
            <Animatable.Image
              source={require('./../../assets/images/new-3.jpeg')}
              style={styles.image}
              animation={'zoomIn'}
              delay={200}
            />
            <Animatable.Image
              source={require('./../../assets/images/new-2.jpeg')}
              animation={'zoomIn'}
              delay={200}
              style={[
                styles.image,
                {
                  marginHorizontal: SIZES.width * 0.03,
                  marginTop: SIZES.width * 0.08,
                },
              ]}
            />
            <Animatable.Image
              source={require('./../../assets/images/new-1.jpeg')}
              animation={'zoomIn'}
              delay={200}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.loginArea}>
          <View style={styles.textInputContainer}>
            <NewFlagText />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => navigation.navigate('OtpScreen')}>
              <Text style={styles.btnTitle}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{alignItems: 'center', marginVertical: SIZES.width * 0.08}}>
            <Text style={styles.dividerText}>OR</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.socialBtn}>
              <Google />
              <Text style={styles.socialText}>Continue with google</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: SIZES.width * 0.08}}>
            <TouchableOpacity style={styles.socialBtn}>
              <Apple />
              <Text style={styles.socialText}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.description}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.descriptionText}>
                By continuing, you're agreeing to our
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
      </ScrollView>
    </View>
  );
};

export default NewLoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    marginTop: Platform.OS ? -SIZES.width * 0.26 : -SIZES.width * 0.31,
  },
  loginArea: {
    marginHorizontal: SIZES.width * 0.051,
    marginTop: Platform.OS ? SIZES.width * 0.11 : 0,
  },
  equalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: '30%',
    height: SIZES.width * 0.465,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  logoContainer: {
    position: 'absolute',
    top: SIZES.width * 0.4,
    left: SIZES.width * 0.348,
    zIndex: 1,
  },
  textInputContainer: {
    marginTop: SIZES.width * 0.08,
  },
  btn: {
    width: '100%',
    height: SIZES.width * 0.14,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.057,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.042,
    fontWeight: '600',
  },
  dividerText: {
    color: '#446C62',
    fontFamily: 'Inter-Medium',
    fontSize: SIZES.width * 0.04,
    lineHeight: SIZES.width * 0.042,
  },
  socialBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#8E8E8E',
    height: SIZES.width * 0.13,
    alignItems: 'center',
    borderRadius: 7,
  },
  socialText: {
    fontSize: SIZES.width * 0.03,
    fontWeight: '400',
    marginLeft: SIZES.width * 0.03,
    color: '#000',
  },
  description: {
    width: '100%',
    height: SIZES.width * 0.1,
    marginTop: SIZES.width * 0.057,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '300',
    lineHeight: SIZES.width * 0.051,
    color: '#000',
  },
  bold: {
    fontSize: SIZES.width * 0.026,
    fontWeight: '600',
    lineHeight: SIZES.width * 0.051,
    color: '#000',
  },
});
