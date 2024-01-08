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
import CommonTextInputContainer from '../../components/CommonTextInputContainer';

const CarbonCalculaterAddDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Add details'} />
      </View>
      <View style={styles.textinputContainer}>
        <View>
          <CommonTextInputContainer placeholder={'Name'} />
        </View>
        <View style={{marginTop: SIZES.width * 0.033}}>
          <CommonTextInputContainer placeholder={'Email'} />
        </View>
        <View style={{marginTop: SIZES.width * 0.033}}>
          <CommonTextInputContainer placeholder={'Phone Number'} />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btncontainer}
            onPress={() => navigation.navigate('IndiviualCalculater')}>
            <Text style={styles.btnTitle}>Start Calculating</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CarbonCalculaterAddDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  textinputContainer: {
    marginHorizontal: SIZES.width * 0.051,
    marginTop: SIZES.width * 0.051,
  },
  btn: {
    width: '100%',
    height: SIZES.height * 0.06,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.056,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.051,
    fontWeight: '600',
  },
  btncontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
