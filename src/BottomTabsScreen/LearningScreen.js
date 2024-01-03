import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constant';
import LearningComponent from '../../components/LearningComponent';
import {Learning, Associate} from '../../constant/data';
import TopNavbar from '../../components/TopNavbar';

const LearningScreen = () => {
  console.log(Learning);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'transparent'} />
      <View>
        <TopNavbar />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Explore Rewards</Text>
      </View>
      <View style={{marginHorizontal: SIZES.width * 0.039}}>
        <LearningComponent data={Associate} />
      </View>
    </SafeAreaView>
  );
};

export default LearningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    marginHorizontal: SIZES.width * 0.0765,
    marginTop: SIZES.width * 0.042,
  },
  title: {
    fontSize: SIZES.width * 0.048,
    fontFamily: 'Inter-Medium',
    color: '#000',
  },
});
