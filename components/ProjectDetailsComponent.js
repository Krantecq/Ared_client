import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import Svg, {Path, Circle} from 'react-native-svg';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const ProjectDetailsComponent = ({route}) => {
  const {selectedItem} = route.params;
  const navigation = useNavigation();

  const Row = ({label, value}) => {
    if (value !== 'Gold standard') {
      return (
        <View style={styles.dividerContainer}>
          <Text style={styles.lableText}>{label}</Text>
          <Text style={styles.valueText}>{value}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.dividerContainer}>
          <Text style={styles.lableText}>{label}</Text>
          <View
            style={{
              padding: SIZES.width * 0.015,
              backgroundColor: '#ffc703',
              borderRadius: 12,
              marginLeft: SIZES.width * 0.043,
            }}>
            <Text
              style={{
                fontSize: SIZES.width * 0.03,
                paddingHorizontal: SIZES.width * 0.01,
                color: '#fff',
                fontWeight: '400',
              }}>
              {value}
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <ScrollView
        style={{marginBottom: SIZES.width * 0.07}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={selectedItem.image}
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
          <View
            style={{
              position: 'absolute',
              left: 25,
              bottom: SIZES.width * 0.051,
              width: '100%',
            }}>
            <Text style={styles.title}>{selectedItem.title}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: SIZES.width * 0.102,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="location"
                  size={SIZES.width * 0.062}
                  color={'#FFF'}
                />
                <Text style={styles.addressText}>{selectedItem.address}</Text>
              </View>
              <View style={styles.plaincontainer}>
                <Text
                  style={{
                    fontSize: SIZES.width * 0.018,
                    fontWeight: '400',
                    color: '#fff',
                  }}>
                  {selectedItem.plan}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: SIZES.width * 0.051}}>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              Summary
            </Text>
            <Text
              style={{
                marginTop: SIZES.width * 0.039,
                fontSize: SIZES.width * 0.031,
                fontWeight: '300',
                color: '#000',
                lineHeight: SIZES.width * 0.051,
              }}>
              Carbon credits are a fundamental tool in the fight against climate
              change. They represent a quantifiable unit of carbon dioxide
              emissions that have been reduced, avoided, or sequestered by a
              specific project or initiative. By purchasing carbon credits,
              individuals and companies can offset their own carbon emissions
              and contribute to projects that have a positive impact on the
              environment.
            </Text>
          </View>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              How it's work
            </Text>
            <Text
              style={{
                marginTop: SIZES.width * 0.039,
                fontSize: SIZES.width * 0.031,
                fontWeight: '300',
                color: '#000',
                lineHeight: SIZES.width * 0.051,
              }}>
              Carbon credits are a fundamental tool in the fight against climate
              change. They represent a quantifiable unit of carbon dioxide
              emissions that have been reduced, avoided, or sequestered by a
              specific project or initiative. By purchasing carbon credits,
              individuals and companies can offset their own carbon emissions
              and contribute to projects that have a positive impact on the
              environment.
            </Text>
          </View>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              Project Photos
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: SIZES.width * 0.026,
                marginTop: SIZES.width * 0.026,
              }}>
              <View style={styles.singleimageContainer}>
                <Image source={selectedItem.image} style={styles.image} />
              </View>
              <View style={styles.singleimageContainer}>
                <Image source={selectedItem.image} style={styles.image} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: SIZES.width * 0.013,
              }}>
              <View style={styles.singleimageContainer}>
                <Image source={selectedItem.image} style={styles.image} />
              </View>
              <View style={styles.singleimageContainer}>
                <Image source={selectedItem.image} style={styles.image} />
              </View>
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.064}}>
            <Text style={[styles.description, {fontWeight: '500'}]}>
              Locations
            </Text>
            <Text
              style={{
                marginTop: SIZES.width * 0.039,
                fontSize: SIZES.width * 0.031,
                fontWeight: '300',
                color: '#000',
                lineHeight: SIZES.width * 0.051,
              }}>
              Carbon credits are a fundamental tool in the fight against climate
              change. They represent a quantifiable unit of carbon dioxide
              emissions that have been reduced, avoided, or sequestered by a
              specific project or initiative.
            </Text>
          </View>
          <View style={styles.rowContainer}>
            {Row({label: 'Project name', value: 'Solar Project Hatta '})}
            {Row({label: 'Active since', value: '2021'})}
            {Row({label: 'Certification', value: 'Gold standard'})}
            {Row({label: 'Project developer', value: 'Forliance'})}
            {Row({label: 'Technical document', value: 'Forliance'})}
            {Row({label: 'Project design validate by', value: 'Forliance'})}
            {Row({label: 'Credits verified by ', value: 'VaForliance'})}
            {Row({label: 'Registry entry ', value: 'Forliance 2'})}
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btncontainer}
              onPress={() =>
                navigation.navigate('NeutraliseScreen', {
                  selectedItem: selectedItem,
                })
              }>
              <Text style={styles.btnTitle}>Neutralise Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectDetailsComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  rowContainer: {
    marginTop: SIZES.width * 0.04,
  },
  imageContainer: {
    width: SIZES.width,
    height: SIZES.height * 0.5,
  },
  title: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.08,
    fontWeight: '400',
    lineHeight: SIZES.width * 0.128,
  },
  addressText: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.026,
    fontWeight: '500',
  },
  plaincontainer: {
    width: SIZES.width * 0.153,
    height: SIZES.width * 0.051,
    backgroundColor: '#ffc700',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: SIZES.width * 0.039,
    fontWeight: '500',
    color: '#000',
    lineHeight: SIZES.width * 0.064,
  },
  singleimageContainer: {
    width: '47%',
    height: SIZES.width * 0.4,
    marginTop: SIZES.width * 0.026,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  btn: {
    width: '100%',
    height: SIZES.height * 0.06,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.0765,
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
  dividerContainer: {
    flexDirection: 'row',
    paddingVertical: SIZES.width * 0.055,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    alignItems: 'center',
  },
  lableText: {
    width: '30%',
    fontSize: SIZES.width * 0.03,
    color: '#000',
  },
  valueText: {
    width: '60%',
    paddingLeft: SIZES.width * 0.051,
    fontSize: SIZES.width * 0.04,
    color: '#06BA62',
    fontWeight: '400',
  },
});
