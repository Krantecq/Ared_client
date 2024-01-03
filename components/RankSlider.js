import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SIZES} from '../constant';
import Icon from 'react-native-vector-icons/EvilIcons';

const RankSlider = ({data}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerContainer}>
        <View style={[styles.headerItem, {width: '15%'}]}>
          <Text style={styles.headerText} numberOfLines={1}>
            Rank
          </Text>
        </View>
        <View style={[styles.headerItem, {width: '20%'}]}>
          <Text style={styles.headerText} numberOfLines={1}>
            Country
          </Text>
        </View>
        <View style={[styles.headerItem, {width: '30%'}]}>
          <Text style={styles.headerText} numberOfLines={1}>
            Advisor
          </Text>
        </View>
        <View style={[styles.headerItem, {width: '35%', alignItems: 'center'}]}>
          <Text style={styles.headerText} numberOfLines={1}>
            Tons of CO2 Neutralised
          </Text>
        </View>
      </View>

      {data.map(item => (
        <View key={item.id} style={styles.rowContainer}>
          <View style={[styles.rowItem, {width: '15%'}]}>
            <Text style={[styles.title, {paddingLeft: 5}]}>{item.Rank}</Text>

            {item.rating ? (
              <Icon
                name={'chevron-up'}
                color={'green'}
                size={20}
                style={{marginBottom: 3}}
              />
            ) : (
              <Icon
                name={'chevron-down'}
                color={'red'}
                size={20}
                style={{marginBottom: 3}}
              />
            )}
          </View>
          <View style={[styles.rowItem, {width: '20%'}]}>
            <View style={{width: '30%', height: 15}}>
              <Image source={item.flag} style={styles.flagcontainer} />
            </View>
            <Text style={[styles.title, {paddingLeft: 5}]}>{item.Country}</Text>
          </View>
          <View style={[styles.rowItem, {width: '30%'}]}>
            <View style={{width: '30%', height: 25, borderRadius: 32}}>
              <Image source={item.profile} style={styles.flagcontainer} />
            </View>
            <Text style={[styles.title, {paddingLeft: 8}]} numberOfLines={1}>
              {item.Advisor}
            </Text>
          </View>
          <View
            style={[styles.rowItem, {width: '35%', justifyContent: 'center'}]}>
            <Text style={[styles.title, {paddingLeft: 5}]} numberOfLines={1}>
              {item.Co2}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default RankSlider;

const styles = StyleSheet.create({
  maincontainer: {
    marginHorizontal: 15,
    borderWidth: 0.5,
    padding: 10,
    borderColor: '#C1C1C1',
    borderRadius: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  headerItem: {
    // backgroundColor: '#AEAEAE',
    padding: 10,
  },
  headerText: {
    fontSize: 9,
    fontWeight: '300',
    color: '#AEAEAE',
  },
  rowContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    marginBottom: 5,
    borderBottomWidth: 0.5,
    paddingVertical: 6,
    borderColor: '#CCC',
  },
  rowItem: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
  },
  flagcontainer: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 32,
  },
  title: {
    color: '#000',
    fontSize: 10,
    fontWeight: '300',
  },
});
