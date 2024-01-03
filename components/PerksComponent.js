import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PerksComponent = ({data}) => {
  const naviagtion = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <>
            {item.status === 'active' ? (
              <TouchableOpacity
                style={styles.transactionItem}
                onPress={() =>
                  naviagtion.navigate('CouponcodeScreen', {selectedItem: item})
                }>
                <View style={styles.imageContainer}>
                  <Image
                    source={item.image}
                    style={{width: 30, height: 30, resizeMode: 'contain'}}
                  />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.flexbox}>
                    <View>
                      <Text style={[styles.title, {color: item.color}]}>
                        {item.slogan}
                      </Text>
                      <Text style={styles.subTitle}>{item.discription}</Text>
                    </View>
                    <View style={styles.btn}>
                      <Text
                        style={[
                          styles.subTitle,
                          {
                            fontSize: 8,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingVertical: 1,
                            backgroundColor: '#fff',
                            borderRadius: 32,
                            borderWidth: 0.5,
                            color: '#1D493E',
                            borderColor: '#1D493E',
                          },
                        ]}>
                        Get Now
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ) : (
              <View
                style={[
                  styles.transactionItem,
                  {opacity: 0.8, backgroundColor: 'rgba(204, 204, 204, 0.2)'},
                ]}>
                <View style={styles.imageContainer}>
                  <Image
                    source={item.image}
                    style={{width: 30, height: 30, resizeMode: 'contain'}}
                  />
                </View>
                <View style={styles.textContainer}>
                  <View style={styles.flexbox}>
                    <View>
                      <Text style={[styles.title, {color: item.color}]}>
                        {item.slogan}
                      </Text>
                      <Text style={styles.subTitle}>{item.discription}</Text>
                    </View>
                    <View style={styles.btn}>
                      <Text
                        style={[
                          styles.subTitle,
                          {
                            fontSize: 8,
                            paddingLeft: 10,
                            paddingRight: 10,
                            paddingVertical: 1,
                            backgroundColor: '#rgba(204, 204, 204, 0.2)',
                            borderRadius: 32,
                            borderWidth: 0.5,
                            color: 'grey',
                            borderColor: '#rgba(204, 204, 204, 0.2)',
                          },
                        ]}>
                        Get Now
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  transactionItem: {
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 6,
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    width: '80%',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: '#1D493E',
    fontSize: 13,
    fontFamily: 'Inter-Medium',
  },
  subTitle: {
    color: '#3D3D3D',
    fontSize: 10,
    fontFamily: 'Inter-Medium',
    lineHeight: 16,
  },
  flexbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default PerksComponent;
