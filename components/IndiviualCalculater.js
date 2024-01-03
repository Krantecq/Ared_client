import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../constant';
import * as Progress from 'react-native-progress';
import {Individuals} from '../constant/data';
import Svg, {Path, Defs, ClipPath, Rect, Line, Circle} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import BackTopbar from './BackTopbar';
import {ArrowComponent} from '../src/SvgComponent/HomeIconComponent';

const IndiviualCalculater = () => {
  const navigation = useNavigation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNextQuestion = () => {
    setSelectedOption(null);
    if (currentQuestionIndex < Individuals.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setResult(true);
      setCurrentQuestionIndex(0);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigation.navigate('BottomTabScreen');
    }
  };

  const totalQuestions = Individuals.length;
  const progress =
    ((currentQuestionIndex + 1) / totalQuestions) * (SIZES.width - 40);

  const handleOptionClick = index => {
    setSelectedOption(index);
    handleNextQuestion();
  };

  const handleNavigation = () => {
    setResult(false);
    setCurrentQuestionIndex(0);
    navigation.navigate('ProjectScreen');
  };


  if (result === true) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={COLORS.transparent} />
        <View style={{flex: 1, alignItems: 'center'}}>
          <View style={{marginTop: SIZES.width * 0.256}}>
            <Text style={styles.title1}>
              Corporate Carbon Calculater result
            </Text>
          </View>
          <LinearGradient
            colors={['#fbfffd', 'rgba(239, 255, 247, 0.1)']}
            style={styles.resultContainer}
            start={{x: 1, y: 0.1}}
            end={{x: 1, y: 1}}>
            <View style={{paddingTop: SIZES.width * 0.026}}>
              <Text style={styles.title7}>Start taking actions</Text>
            </View>
            <View style={styles.resultImageContainer}>
              <Image
                source={require('../assets/images/cycle.png')}
                style={styles.image}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title2}>50</Text>
              <Text style={styles.title3}>ton CO2 eq /year</Text>
              <TouchableOpacity>
                <Text style={styles.title4}>Go to Advanced Calculator</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
          <View style={{marginTop: SIZES.width * 0.051}}>
            <TouchableOpacity style={styles.flexBox} onPress={handleNavigation}>
              <Text style={styles.title5}>Neutralise Now</Text>
              <View style={styles.title6}>
                <ArrowComponent />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View style={styles.mainContainer}>
        <View style={styles.barContainer}>
          <View>
            <Text style={styles.index}>
              {currentQuestionIndex + 1}/{totalQuestions}
            </Text>
          </View>
          <View style={styles.linebar}>
            <Progress.Bar
              progress={1}
              width={progress}
              height={12}
              borderWidth={0.5}
              borderRadius={32}
              color="#00EA77"
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.questionContainer}>
            <View style={{width: '40%', height: '100%'}}>
              <Image
                source={Individuals[currentQuestionIndex].image}
                style={{width: '90%', height: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.questionText}>
                {Individuals[currentQuestionIndex].question}
              </Text>
            </View>
          </View>
          <View style={styles.optionContainer}>
            {Individuals[currentQuestionIndex].options.map((option, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.option,
                  selectedOption === idx ? styles.selectedOption : null,
                ]}
                onPress={() => handleOptionClick(idx)}>
                <Text style={styles.options}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handlePreviousQuestion}>
            <Svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <Circle
                cx="28"
                cy="28"
                r="27.72"
                transform="rotate(-180 28 28)"
                fill="white"
                stroke="#636363"
                strokeWidth={0.56}
              />
              <Path
                d="M30 37L21.4688 28.4688L30 19.9375"
                stroke="#00EA77"
                strokeWidth={1.56}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextQuestion}>
            <Svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <Circle
                cx="28"
                cy="28"
                r="27.72"
                fill="white"
                stroke="#636363"
                strokeWidth={0.56}
              />
              <Path
                d="M26 19L34.5313 27.5312L26 36.0625"
                stroke="#00EA77"
                strokeWidth={1.56}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default IndiviualCalculater;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: SIZES.width * 0.051,
  },
  barContainer: {
    height: '15%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  imageContainer: {
    height: '65%',
  },
  buttonContainer: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linebar: {
    width: '100%',
    height: SIZES.width * 0.031,
    backgroundColor: '#F4F6F6',
    marginTop: SIZES.width * 0.013,
    borderRadius: 32,
  },
  index: {
    color: '#BBB',
    fontSize: SIZES.width * 0.031,
    fontWeight: '400',
  },
  questionContainer: {
    height: '25%',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  textContainer: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
  },
  questionText: {
    color: '#000',
    fontSize: SIZES.width * 0.051,
    fontWeight: '400',
    lineHeight: 30,
    paddingLeft: SIZES.width * 0.026,
  },
  optionContainer: {
    height: '75%',
    marginTop: SIZES.width * 0.0382,
  },
  option: {
    padding: SIZES.width * 0.04,
    borderWidth: 0.7,
    borderColor: '#00EA77',
    borderRadius: 54,
    marginTop: SIZES.width * 0.064,
  },
  options: {
    textAlign: 'center',
    fontSize: SIZES.width * 0.036,
    fontWeight: '400',
    color: '#000',
  },
  resultContainer: {
    width: '100%',
    height: SIZES.width * 1.1,
    alignItems: 'center',
    backgroundColor: '#effff7',
    borderRadius: 200,
    marginTop: SIZES.width * 0.042,
  },
  selectedOption: {
    backgroundColor: '#00EA77',
    color: '#fff',
  },
  title1: {
    fontSize: SIZES.width * 0.0382,
    fontWeight: '500',
    color: '#050505',
  },
  resultImageContainer: {
    width: SIZES.width * 0.765,
    height: SIZES.width * 0.51,
    marginTop: SIZES.width * 0.129,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title2: {
    fontSize: SIZES.width * 0.18,
    fontWeight: '500',
    color: '#00EA77',
  },
  title3: {
    color: '#050505',
    fontWeight: '400',
    fontSize: SIZES.width * 0.049,
  },
  title4: {
    color: '#008041',
    fontSize: SIZES.width * 0.026,
    fontWeight: '400',
    paddingTop: SIZES.width * 0.026,
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title5: {
    fontSize: SIZES.width * 0.051,
    fontWeight: '400',
    color: '#03C666',
    fontFamily: 'Quicksand-Medium',
  },
  title6: {
    width: SIZES.width * 0.044,
    height: SIZES.width * 0.044,
    marginLeft: SIZES.width * 0.026,
  },
  title7: {
    color: '#130F26',
    fontSize: SIZES.width * 0.03,
    fontWeight: '400',
  },
});
