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
import BackTopbar from '../../components/BackTopbar';
import {useRoute} from '@react-navigation/native';

const CouponcodeScreen = () => {
  const route = useRoute();
  const selectedItem = route.params?.selectedItem;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Perks'} />
      </View>
      <View style={styles.sloganContainer}>
        <View style={styles.flexContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={selectedItem.image}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{selectedItem.slogan}</Text>
            <Text style={styles.description}>{selectedItem.discription}</Text>
          </View>
        </View>
      </View>
      <View style={styles.maincontainer}>
        <View style={{marginTop: SIZES.width * 0.051}}>
          <Text style={styles.text}>Coupon Code</Text>
        </View>
        <View style={styles.greyContainer}>
          <Text
            style={[
              styles.text,
              {fontSize: SIZES.width * 0.051, fontFamily: 'Inter-Medium'},
            ]}>
            CAE
          </Text>
        </View>
        <View style={{marginTop: SIZES.width * 0.041}}>
          <Text style={styles.text}>Visit noon grocery app</Text>
        </View>
        <View style={{marginTop: SIZES.width * 0.051}}>
          <Text
            style={{
              color: '#000',
              fontSize: SIZES.width * 0.025,
              fontWeight: '400',
            }}>
            Terms and Conditions applied
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CouponcodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  sloganContainer: {
    height: SIZES.width * 0.26,
    marginHorizontal: SIZES.width * 0.08,
    marginTop: SIZES.width * 0.11,
    justifyContent: 'center',
    paddingHorizontal: SIZES.width * 0.051,
    borderRadius: 12,
    borderColor: '#C1C1C1',
    borderWidth: 0.5,
  },
  imageContainer: {
    width: '20%',
    height: '100%',
  },
  flexContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  textContainer: {
    marginLeft: SIZES.width * 0.038,
    width: '80%',
    marginTop: SIZES.width * 0.05,
  },
  title: {
    color: '#1D493E',
    fontFamily: 'Inter-Medium',
    fontSize: SIZES.width * 0.041,
    lineHeight: SIZES.width * 0.051,
  },
  description: {
    color: '#1D493E',
    fontFamily: 'Inter-Regular',
    fontSize: SIZES.width * 0.031,
    lineHeight: SIZES.width * 0.042,
  },
  maincontainer: {
    height: SIZES.width * 0.52,
    marginHorizontal: SIZES.width * 0.08,
    marginTop: SIZES.width * 0.051,
    paddingHorizontal: SIZES.width * 0.051,
    borderRadius: 12,
    borderColor: '#C1C1C1',
    borderWidth: 0.5,
    alignItems: 'center',
  },
  text: {
    color: '#1D493E',
    fontSize: SIZES.width * 0.041,
    fontFamily: 'Inter-Regular',
  },
  greyContainer: {
    marginTop: SIZES.width * 0.041,
    width: '100%',
    height: SIZES.width * 0.14,
    borderWidth: 0.5,
    borderColor: '#C1C1C1',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
});
