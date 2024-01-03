import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS, SIZES} from '../../constant/theme';
import LogoComponent from '../SvgComponent/LogoComponent';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('NewOnboardingScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View style={styles.sideDivider}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/earth.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Let's unite for</Text>
          <Text style={styles.text}>Earth</Text>
        </View>
        <View style={styles.singleDivider}></View>
        <View style={styles.logoContainer}>
          <LogoComponent />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FF9B',
  },
  sideDivider: {
    marginHorizontal: SIZES.horizontal,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    justifyContent: 'flex-end',
    borderRadius: SIZES.base,
  },
  textContainer: {
    width: '100%',
    height: '18%',
    justifyContent: 'flex-end',
    marginHorizontal: SIZES.horizontal,
  },
  logoContainer: {
    width: '100%',
    height: '15%',
    marginHorizontal: SIZES.horizontal,
    justifyContent: 'center',
  },
  image: {
    borderRadius: SIZES.radius,
    width: '100%',
    height: '90%',
  },
  text: {
    fontSize: SIZES.width * 0.112,
    fontFamily: 'Quicksand-Medium',
    color: COLORS.secondary,
    letterSpacing: 0.2,
  },
  singleDivider: {
    width: '18%',
    height: 2,
    backgroundColor: COLORS.black,
    marginHorizontal: SIZES.horizontal + 7,
    marginTop: SIZES.width * 0.026,
  },
});

export default Splash;
