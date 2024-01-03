import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import TableComponent from '../../components/TableComponent';

const SuccessfullScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.transparent} />
      <View>
        <BackTopbar name={'Congratulations'} specify={'BottomTabScreen'}/>
      </View>
      <ScrollView
        style={{marginBottom: SIZES.width * 0.026}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/img-9.png')}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>
              Great, You have made investments in carbon-neutral initiatives
              with the goal of building a better world for future generations.
            </Text>
          </View>
          <View style={styles.tableContainer}>
            <TableComponent />
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.btncontainer}
                onPress={() => console.log('enter')}>
                <Text style={styles.btnTitle}>Download Certificate</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SuccessfullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: SIZES.width * 0.051,
  },
  imageContainer: {
    marginTop: SIZES.width * 0.05,
    height: SIZES.width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: SIZES.width * 0.06,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: '#000',
    fontSize: SIZES.width * 0.033,
    fontWeight: '400',
  },
  tableContainer: {
    marginTop: SIZES.width * 0.05,
    height: SIZES.width * 0.65,
  },
  btn: {
    height: SIZES.width * 0.08,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.03,
    borderRadius: 3,
    alignItems: 'center',
    width: '40%',
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.024,
    fontWeight: '600',
  },
  btncontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: '#000',
    fontSize: SIZES.width * 0.03,
    fontWeight: '400',
  },
});
