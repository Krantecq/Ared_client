import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import TopNavbar from '../../components/TopNavbar';
import SingleBox from '../../components/SingleBox';
import {
  About,
  Bank,
  Learning,
  Legal,
  Logout,
  Payment,
  Profile,
  Support,
} from '../SvgComponent/settingComponent';
import FooterImage from '../../components/FooterImage';

const ProfileScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <TopNavbar />
      </View>
      <View style={styles.imageContainer}>
        <View style={{width: SIZES.width * 0.204, height: SIZES.width * 0.204}}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={{width: '100%', height: '100%', borderRadius: 50}}
          />
        </View>
        <View
          style={{height: SIZES.width * 0.102, marginTop: SIZES.width * 0.026}}>
          <Text style={styles.title}>Kashif Ahmad Khan</Text>
          <Text style={styles.subTitle}>03390947152719</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: SIZES.width * 0.064,
          marginTop: SIZES.width * 0.051,
        }}>
        <View style={styles.sectionDivider}>
          <TouchableOpacity
            style={{width: '47%'}}
            onPress={() => navigation.navigate('EditProfileScreen')}>
            <SingleBox title={'My Profile'} image={<Profile />} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '47%'}}
            onPress={() => navigation.navigate('SupportScreen')}>
            <SingleBox title={'Support'} image={<Support />} />
          </TouchableOpacity>
        </View>
        <View style={[styles.sectionDivider, {marginTop: SIZES.width * 0.033}]}>
          <TouchableOpacity
            style={{width: '47%'}}
            onPress={() => navigation.navigate('AboutScreen')}>
            <SingleBox title={'About Ared'} image={<About />} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '47%'}}
            onPress={() => navigation.navigate('LegalScreen')}>
            <SingleBox title={'Legal'} image={<Legal />} />
          </TouchableOpacity>
        </View>
        <View style={[styles.sectionDivider, {marginTop: SIZES.width * 0.033}]}>
          <TouchableOpacity
            style={{width: '47%'}}
            onPress={() => navigation.navigate('LeadersScreen')}>
            <SingleBox title={'Payments'} image={<Payment />} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '47%'}}
            onPress={() => navigation.navigate('NewLoginScreen')}>
            <SingleBox title={'Logout'} image={<Logout />} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.footertext}> Connect with us</Text>
        <FooterImage />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: SIZES.width * 0.382,
    marginTop: SIZES.width * 0.0765,
    marginHorizontal: SIZES.width * 0.128,
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.042,
    fontWeight: '500',
    lineHeight: SIZES.width * 0.0765,
  },
  subTitle: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.051,
    textAlign: 'center',
  },
  sectionDivider: {
    width: '100%',
    height: SIZES.height * 0.08,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxContainer: {
    marginHorizontal: SIZES.width * 0.0765,
    height: SIZES.width * 0.153,
    marginTop: SIZES.height * 0.05,
    alignItems: 'center',
  },
  footertext: {
    color: '#1D493E',
    fontSize: SIZES.width * 0.036,
    fontWeight: '400',
  },
});
