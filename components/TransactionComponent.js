import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';
import {SIZES} from '../constant';

const TransactionComponent = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.transactionItem}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/images/co2.png')} />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.flexbox}>
                <Text style={styles.title}>Project Name</Text>
                <Text style={styles.subTitle}>{item.Associate}</Text>
              </View>
              <View style={styles.flexbox}>
                <Text
                  style={[
                    styles.title,
                    {
                      fontSize: SIZES.width * 0.021,
                      lineHeight: SIZES.width * 0.031,
                    },
                  ]}>
                  User |Project
                </Text>
                <Text
                  style={[
                    styles.subTitle,
                    {
                      fontSize: SIZES.width * 0.021,
                      lineHeight: SIZES.width * 0.031,
                    },
                  ]}>
                  {item.user}
                </Text>
              </View>
              <View style={styles.flexbox}>
                <Text
                  style={[
                    styles.title,
                    {
                      fontSize: SIZES.width * 0.021,
                      lineHeight: SIZES.width * 0.031,
                    },
                  ]}>
                  2345 Co2
                </Text>
                <Text
                  style={[
                    styles.subTitle,
                    {
                      fontSize: SIZES.width * 0.021,
                      lineHeight: SIZES.width * 0.031,
                    },
                  ]}>
                  {item.co2}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.width * 0.051,
  },
  transactionItem: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: SIZES.width * 0.026,
    marginVertical: SIZES.width * 0.013,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 6,
  },
  imageContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '80%',
    marginLeft: SIZES.width * 0.026,
    marginRight: SIZES.width * 0.026,
  },
  title: {
    color: '#3D3D3D',
    fontSize: SIZES.width * 0.033,
    lineHeight: SIZES.width * 0.041,
    fontFamily: 'Inter-Medium',
  },
  subTitle: {
    color: '#3D3D3D',
    fontSize: SIZES.width * 0.033,
    fontFamily: 'Inter-Medium',
    lineHeight: SIZES.width * 0.041,
  },
  flexbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TransactionComponent;
