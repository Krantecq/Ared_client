/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, SIZES} from '../constant';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
console.log(SIZES.width * 0.25);

const RenewableProjectList = ({data}) => {
  const naviagtion = useNavigation();
  const renderItem = ({item, index}) => (
    <Animatable.View animation={'fadeInUp'} duration={1000} delay={index * 100}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() =>
          naviagtion.navigate('CouponcodeScreen', {selectedItem: item})
        }>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemTitle}>{item.slogan}</Text>
          <Text style={styles.itemDescription}>{item.discription}</Text>

          <View
            style={{
              alignItems: 'flex-end',
              bottom: 0,
              position: 'absolute',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderWidth: 0.5,
                padding: SIZES.width * 0.012,
                borderRadius: 25,
                paddingHorizontal: SIZES.width * 0.026,
                borderColor: '#1D493E',
              }}>
              <View style={{marginLeft: SIZES.width * 0.011}}>
                <Text style={styles.type}>Get Now</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => renderItem({item, index})}
      keyExtractor={item => item.id.toString()}
      bounces={true}
      contentContainerStyle={styles.flatListContent}
      style={{marginBottom: SIZES.width * 0.25}}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingVertical: SIZES.width * 0.039,
    paddingHorizontal: SIZES.width * 0.026,
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 11,
    padding: SIZES.width * 0.02,
    marginBottom: SIZES.width * 0.026,
    height: SIZES.width * 0.26,
  },
  itemImage: {
    width: '28%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: SIZES.width * 0.026,
  },
  itemTitle: {
    fontWeight: '500',
    fontSize: SIZES.width * 0.032,
    color: '#1D493E',
    fontFamily: 'Inter-Regular',
  },
  itemDescription: {
    marginTop: SIZES.width * 0.01,
    fontSize: SIZES.width * 0.03,
    color: '#1D493E',
    fontWeight: '300',
    lineHeight: SIZES.width * 0.051,
  },
  type: {
    textAlign: 'right',
    color: '#1D493E',
    fontSize: SIZES.width * 0.025,
    fontWeight: '300',
  },
});

export default RenewableProjectList;
