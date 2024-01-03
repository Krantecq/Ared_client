/* eslint-disable react-native/no-inline-styles */
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
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import Icon from 'react-native-vector-icons/EvilIcons';
import {neutralise} from '../../constant/data';
import DashboardDistributer from '../../components/DashboardDistributer';
import SelectedNeutalisedCompoent from '../../components/SelectedNeutalisedCompoent';

const NeutraliseScreen = ({route, navigation}) => {
  const {selectedItem} = route.params;
  const [selectedOption, setSelectedOption] = useState(neutralise[0].id);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.transparent} />
      <View>
        <BackTopbar name={'Neutralise'} />
      </View>
      <ScrollView
        style={{marginBottom: SIZES.width * 0.026}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.categoryItem}>
            <View style={styles.iconContainer}>
              <Image source={selectedItem.image} style={styles.icon} />
              <View style={{position: 'absolute', left: 10, bottom: 10}}>
                <Text style={styles.categoryTitle}>{selectedItem.title}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: SIZES.width * 0.031,
                marginRight: SIZES.width * 0.018,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="location" size={24} color={'#1D493E'} />
                <Text style={styles.addressText}>{selectedItem.address}</Text>
              </View>
              <View style={styles.plaincontainer}>
                <Text
                  style={{
                    fontSize: SIZES.width * 0.017,
                    fontWeight: '400',
                    color: '#fff',
                  }}
                  numberOfLines={1}>
                  {selectedItem.plan}
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: SIZES.width * 0.02}}>
            {neutralise.map(item => (
              <TouchableOpacity
                key={item.id}
                style={[
                  styles.boxContainer,
                  selectedOption === item.id
                    ? {
                        backgroundColor: '#f8fffb',
                        borderColor: '#00EA77',
                        borderWidth: 1,
                      }
                    : {},
                ]}
                onPress={() => setSelectedOption(item.id)}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{width: '60%'}}>
                    <Text style={styles.title} numberOfLines={1}>
                      {item.title}
                    </Text>
                    <Text style={styles.description} numberOfLines={1}>
                      {item.description}
                    </Text>
                  </View>
                  <View style={{width: '30%'}}>
                    <Text style={styles.price} numberOfLines={1}>
                      {item.price}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <View>
            <TouchableOpacity
              style={styles.customContainer}
              onPress={() => navigation.navigate('CustomeScreen')}>
              <Text
                style={{
                  color: '#1D493E',
                  marginBottom: SIZES.width * 0.01,
                  fontSize: SIZES.width * 0.04,
                }}>
                Custom
              </Text>
              <Text style={styles.description}>Enter a custom value</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.diffrence}>
            <Text style={styles.diffrenceText}>OR</Text>
          </View>
          <View>
            <SelectedNeutalisedCompoent />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btncontainer}
              onPress={() => navigation.navigate('PaymentScreen')}>
              <Text style={styles.btnTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NeutraliseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginHorizontal: SIZES.width * 0.051,
    paddingVertical: SIZES.width * 0.041,
  },
  categoryItem: {
    height: SIZES.width * 0.57,
    width: '100%',
    marginBottom: SIZES.width * 0.051,
    padding: SIZES.width * 0.026,
    borderWidth: 0.5,
    borderColor: '#CCC',
    borderRadius: 12,
  },
  iconContainer: {
    height: SIZES.width * 0.4,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  categoryTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.057,
    fontWeight: '700',
  },
  addressText: {
    color: '#1D493E',
    fontSize: SIZES.width * 0.029,
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
    color: '#000',
    fontSize: SIZES.width * 0.021,
    fontWeight: '300',
    lineHeight: SIZES.width * 0.033,
  },
  boxContainer: {
    padding: SIZES.width * 0.035,
    marginBottom: SIZES.width * 0.04,
    borderColor: COLORS.borderColor,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  title: {
    fontSize: SIZES.width * 0.04,
    color: '#000',
    paddingBottom: SIZES.width * 0.005,
  },
  price: {
    color: '#1D493E',
    fontSize: SIZES.width * 0.05,
    fontWeight: '500',
  },
  customContainer: {
    borderColor: COLORS.borderColor,
    borderWidth: 0.5,
    borderRadius: 4,
    padding: SIZES.width * 0.035,
    justifyContent: 'center',
  },
  diffrence: {
    alignItems: 'center',
    marginVertical: SIZES.width * 0.08,
  },
  diffrenceText: {
    color: '#AEAEAE',
    fontSize: SIZES.width * 0.04,
    fontWeight: '500',
  },
  btn: {
    width: '100%',
    height: SIZES.width * 0.122,
    backgroundColor: COLORS.btn,
    marginTop: SIZES.width * 0.052,
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
