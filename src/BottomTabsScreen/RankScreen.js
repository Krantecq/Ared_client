import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import TopNavbar from '../../components/TopNavbar';
import RankSlider from '../../components/RankSlider';
import {Ranking} from '../../constant/data';
const RankScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View>
        <TopNavbar />
      </View>
      <ScrollView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top Impact Advisors</Text>
        </View>
        <View>
          <RankSlider data={Ranking} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RankScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  titleContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 28,
  },
});
