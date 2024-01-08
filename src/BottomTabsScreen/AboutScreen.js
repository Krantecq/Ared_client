import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import Svg, {Path, Circle} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/tree.png')}
          style={{width: '100%', height: '100%', resizeMode: 'cover'}}
        />
        <View
          style={{
            position: 'absolute',
            left: 20,
            top: Platform.OS === 'ios' ? 40 : 10,
          }}>
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.12,
              height: SIZES.height * 0.09,
              justifyContent: 'flex-end',
              alignItems: 'center',
              // backgroundColor:'#000'
            }}
            onPress={() => navigation.goBack()}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={SIZES.width * 0.09}
              height={SIZES.height * 0.09}
              viewBox="0 0 30 30"
              fill="none">
              <Circle
                cx="15"
                cy="15"
                r="14.75"
                stroke="#FFFFFF"
                stroke-width="0.5"
              />
              <Path
                d="M20.2981 15.1704H9.3606"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                d="M14.8293 20.6392L9.3606 15.1704L14.8293 9.70166"
                stroke="#FFFFFF"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', left: 25, bottom: 10}}>
          <Text style={styles.title}>About Ared</Text>
        </View>
      </View>
      <View style={{height: SIZES.height - 350}}>
        <ScrollView
          style={styles.Scrollview}
          showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.description}>
              Revolutionizing Carbon Credits and Green Project Investments In
              the ongoing global effort to combat climate change and transition
              towards a more sustainable future, innovative solutions are
              emerging to address the urgent need for carbon reduction and
              environmental preservation. One such groundbreaking platform is
              ARED – a cutting-edge platform that facilitates the purchase of
              carbon credits and empowers individuals and businesses to invest
              in impactful green projects.
            </Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              Understanding Carbon Credits:
            </Text>
            <Text style={[styles.description, {marginTop: 20}]}>
              Carbon credits are a fundamental tool in the fight against climate
              change. They represent a quantifiable unit of carbon dioxide
              emissions that have been reduced, avoided, or sequestered by a
              specific project or initiative. By purchasing carbon credits,
              individuals and companies can offset their own carbon emissions
              and contribute to projects that have a positive impact on the
              environment.
            </Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              Understanding Carbon Credits:
            </Text>
            <Text style={[styles.description, {marginTop: 20}]}>
              Carbon credits are a fundamental tool in the fight against climate
              change. They represent a quantifiable unit of carbon dioxide
              emissions that have been reduced, avoided, or sequestered by a
              specific project or initiative. By purchasing carbon credits,
              individuals and companies can offset their own carbon emissions
              and contribute to projects that have a positive impact on the
              environment.
            </Text>
          </View>
          <View style={{marginTop: 25}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              Understanding Carbon Credits:
            </Text>
            <Text style={[styles.description, {marginTop: 20}]}>
              Carbon credits are a fundamental tool in the fight against climate
              change. They represent a quantifiable unit of carbon dioxide
              emissions that have been reduced, avoided, or sequestered by a
              specific project or initiative. By purchasing carbon credits,
              individuals and companies can offset their own carbon emissions
              and contribute to projects that have a positive impact on the
              environment.
            </Text>
          </View>
          <View style={{marginTop: 25, marginBottom: 100}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              Understanding Carbon Credit:
            </Text>
            <Text style={[styles.description, {marginTop: 20}]}>
              Carbon credits are a fundamental tool in the fight against climate
              change. They represent a quantifiable unit of carbon dioxide
              emissions that have been reduced, avoided, or sequestered by a
              specific project or initiative. By purchasing carbon credits,
              individuals and companies can offset their own carbon emissions
              and contribute to projects that have a positive impact on the
              environment.
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  imageContainer: {
    width: SIZES.width,
    height: 250,
  },
  title: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 50,
  },
  Scrollview: {
    marginHorizontal: 25,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 350,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000',
    lineHeight: 18,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
