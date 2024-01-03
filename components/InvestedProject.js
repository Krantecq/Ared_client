import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {COLORS, SIZES} from '../constant';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const InvestedProjectItem = ({item}) => {
  const navigation = useNavigation();
  console.log('ss', SIZES.width * 0.8);


  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() =>
        navigation.navigate('ProjectDetailsComponent', {selectedItem: item})
      }>
      <View style={styles.iconContainer}>
        <Image source={item.image} style={styles.icon} />
        <View style={{position: 'absolute', left: 10, bottom: 10}}>
          <Text style={styles.categoryTitle}>{item.title}</Text>
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
          <Icon name="location" size={SIZES.width * 0.062} color={'#1D493E'} />
          <Text style={styles.addressText}>{item.address}</Text>
        </View>
        <View style={styles.plaincontainer}>
          <Text
            style={{
              fontSize: SIZES.width * 0.018,
              fontWeight: '400',
              color: '#fff',
            }}>
            {item.plan}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: SIZES.width * 0.031,
          marginHorizontal: SIZES.width * 0.026,
        }}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <View style={styles.flexBox}>
        <View>
          <Text style={{fontSize: SIZES.width * 0.031, color: '#000'}}>
            Investments
          </Text>
          <Text
            style={{
              fontSize: SIZES.width * 0.026,
              marginTop:  SIZES.width * 0.01,
              color: '#3D3D3D',
            }}>
            {item.credit} Credits
          </Text>
        </View>
        <View style={styles.boxContainer}>
          <Text
            style={{
              fontSize: SIZES.width * 0.031,
              marginTop:  SIZES.width * 0.01,
              color: '#1D493E',
            }}>
            {item.co2} Co2
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const InvestedProject = ({data}) => {
  return (
    <View
      style={{
        marginHorizontal: SIZES.width * 0.051,
        marginTop: SIZES.width * 0.051,
      }}>
      {data.map(item => (
        <InvestedProjectItem key={item.id} item={item} />
      ))}
    </View>
  );
};

export default InvestedProject;

const styles = StyleSheet.create({
  flatListContent: {
    paddingVertical: SIZES.width * 0.041,
  },
  categoryItem: {
    height: SIZES.width * 0.8,
    width: '100%',
    marginBottom: SIZES.width * 0.051,
    padding: SIZES.width * 0.026,
    borderWidth: 0.5,
    borderColor: '#CCC',
    borderRadius: 12,
  },
  iconContainer: {
    height: SIZES.width * 0.381,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  categoryTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.056,
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
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SIZES.width * 0.031,
    marginHorizontal: SIZES.width * 0.026,
  },
  boxContainer: {
    borderWidth: 0.5,
    borderColor: '#1D493E',
    padding: SIZES.width * 0.013,
    paddingHorizontal: SIZES.width * 0.064,
    borderRadius: 32,
    paddingBottom: SIZES.width * 0.021,
  },
});
