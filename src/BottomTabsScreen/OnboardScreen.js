import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import Svg, {Path, Defs, ClipPath, Rect, Line} from 'react-native-svg';

const OnboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <BackTopbar name={'Onboard'} />
      </View>
      <View style={styles.centerContainer}>
        <Text
          style={[
            styles.title,
            {textAlign: 'center', fontSize: 16, color: '#446C62'},
          ]}>
          Onboarding
        </Text>
        <View style={styles.flexbox}>
          <TouchableOpacity
            style={styles.singleContainer}
            onPress={() => navigation.navigate('IndividualScreen')}>
            <View style={{alignItems: 'center'}}>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="42"
                viewBox="0 0 33 42"
                fill="none">
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5012 28.1902C8.10958 28.1902 0.943359 29.4589 0.943359 34.5402C0.943359 39.6214 8.06412 40.9356 16.5012 40.9356C24.8927 40.9356 32.0569 39.6648 32.0569 34.5856C32.0569 29.5065 24.9382 28.1902 16.5012 28.1902Z"
                  stroke="#1D493E"
                  stroke-width="1.84425"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5007 20.9427C22.0077 20.9427 26.471 16.4772 26.471 10.9703C26.471 5.46339 22.0077 1 16.5007 1C10.9938 1 6.52838 5.46339 6.52838 10.9703C6.50978 16.4586 10.9442 20.9241 16.4305 20.9427H16.5007Z"
                  stroke="#00EA77"
                  stroke-width="1.84425"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Svg>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>Individual</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              width: '20%',
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[styles.title, {fontSize: 14}]}>OR</Text>
          </View>
          <TouchableOpacity
            style={styles.singleContainer}
            onPress={() => navigation.navigate('CorporateScreen')}>
            <View>
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="37"
                viewBox="0 0 38 37"
                fill="none">
                <Path
                  d="M36.3248 35L1.6748 35"
                  stroke="#1D493E"
                  stroke-width="2.1945"
                  stroke-linecap="round"
                />
                <Path
                  d="M32.8599 35V8.6C32.8599 5.48873 32.8599 3.93309 31.2361 2.96655C29.6122 2 26.9988 2 21.7719 2H16.2279C11.001 2 8.38748 2 6.7637 2.96655C5.13989 3.93309 5.13989 5.48873 5.13989 8.6V35"
                  stroke="#1D493E"
                  stroke-width="2.1945"
                />
                <Path
                  d="M18.9995 33.6249V29.4999"
                  stroke="#00EA77"
                  stroke-width="2.1945"
                  stroke-linecap="round"
                />
                <Line
                  x1="8.60498"
                  y1="13.55"
                  x2="29.395"
                  y2="13.55"
                  stroke="#00EA77"
                  stroke-width="1.65"
                />
                <Line
                  x1="8.60498"
                  y1="21.8"
                  x2="29.395"
                  y2="21.8"
                  stroke="#00EA77"
                  stroke-width="1.65"
                />
              </Svg>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.title}>Corporate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  centerContainer: {
    width: SIZES.width,
    height: SIZES.height - 300,
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  flexbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  singleContainer: {
    width: '40%',
    height: 110,
    backgroundColor: '#F6FFFB',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#81D1BD',
    justifyContent: 'center',
  },
  title: {
    color: '#1D493E',
    fontSize: 13,
    fontWeight: '400',
  },
});
