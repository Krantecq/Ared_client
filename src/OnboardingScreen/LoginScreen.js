/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native';
import {COLORS, SIZES} from '../../constant';
import Svg, {G, Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/AntDesign';
import {slides} from '../../constant/data';
const {width, height} = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = React.useRef();

  const size = SIZES.width * 0.24;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      navigation.replace('NewLoginScreen');
    }
  };

  const desiredOffsets = [33, 66, 100];

  const getDesiredOffset = () => {
    if (currentSlideIndex < desiredOffsets.length) {
      return desiredOffsets[currentSlideIndex];
    }
    return 0;
  };

  const offset = getDesiredOffset();

  const Slide = ({item}) => {
    console.log(item.image);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={item?.image}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.spaceContainer} />
        <View style={styles.circleContainer2}>
          <ImageBackground
            source={require('../../assets/images/rect.png')}
            style={styles.circleContainer}>
            <View
              style={{
                marginHorizontal: SIZES.width * 0.06,
                position: 'absolute',
                top: Platform.OS === 'android' ? 250 : 230,
              }}>
              <View style={{marginBottom: SIZES.width * 0.26}}>
                <Text
                  style={{
                    fontFamily: 'skia',
                    fontSize: SIZES.width * 0.08,
                    lineHeight: SIZES.width * 0.12,
                    color: '#1D493E',
                    fontWeight: '100',
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  };

  const Footer = () => {
    if (currentSlideIndex === slides.length - 1) {
      // Check if it's the last slide
      return (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            bottom: SIZES.width * 0.18,
            left: SIZES.width * 0.051,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0,
            shadowRadius: 6,
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={goToNextSlide}
            style={{
              width: SIZES.width - SIZES.width * 0.1,
              height: SIZES.width * 0.14,
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: SIZES.width * 0.8,
            }}>
            <Text style={{color: '#1D493E', fontSize: SIZES.width * 0.051}}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View
        style={{
          position: 'absolute',
          right: SIZES.width * 0.051,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: SIZES.width * 0.18,
        }}>
        <Svg width={size} height={size}>
          <G rotation="-90" origin={center}>
            <Circle
              stroke={'#33FF9B'}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <Circle
              stroke={'#000'}
              cx={center}
              cy={center}
              r={radius}
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (circumference * offset) / 100}
              fill={'#33FF9B'}
            />
          </G>
        </Svg>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={goToNextSlide}
          style={styles.btn}>
          <Icon name="right" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View style={{flex: 0.05, backgroundColor: '#fff'}}></View>
      <View style={{flex: 0.95, backgroundColor: '#fff'}}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{height: height}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          bounces={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },

  mainContainer: {
    width: width,
  },
  spaceContainer: {
    height: Platform.OS === 'android' ? '20%' : '25%',
    backgroundColor: '#fff',
  },
  circleContainer: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  circleContainer2: {
    height: Platform.OS === 'android' ? '80%' : '70%',
    position: 'relative',
  },
  imageContainer: {
    width: '76%',
    height: '35%',
    position: 'absolute',
    left: SIZES.width * 0.1,
    top: SIZES.width * 0.2,
    zIndex: 1,
    // backgroundColor:'grey'
  },
  btn: {
    position: 'absolute',
    width: SIZES.width * 0.211,
    height: SIZES.width * 0.211,
    borderRadius: SIZES.width * 0.13,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
