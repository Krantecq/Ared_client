import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import TopNavbar from '../../components/TopNavbar';
import CompleteScreenComponent from '../SvgComponent/CompleteScreenComponent';

const MyAredScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <TopNavbar />
      </View>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Our Ared community neutralised </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.pointText}>21,554</Text>
          <Text style={styles.pointText2}>tons of Co2</Text>
        </View>
        <View style={styles.svgcontainer}>
          <CompleteScreenComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyAredScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  title: {
    color: '#313131',
    fontSize: SIZES.width * 0.088,
    fontWeight: '300',
    textAlign: 'center',
  },
  titleContainer: {
    marginTop: SIZES.width * 0.11,
    alignItems: 'center',
  },
  pointText: {
    fontSize: SIZES.width * 0.12,
    color: '#00EA77',
    fontWeight: '500',
    lineHeight: SIZES.width * 0.13,
  },
  pointText2: {
    fontSize: SIZES.width * 0.065,
    color: '#00EA77',
    fontWeight: '500',
    lineHeight: SIZES.width * 0.095,
  },
  svgcontainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: SIZES.width * 0.051,
  },
});
