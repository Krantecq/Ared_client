import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SIZES} from '../constant';
import Icon from 'react-native-vector-icons/FontAwesome';

const MemberComponent = ({data}) => {
  console.log(data);
  return (
    <View style={styles.maincontainer}>
      {data.map(item => (
        <View
          key={item.id}
          style={{
            marginBottom: 20,
            borderWidth: 0.5,
            borderRadius: 7,
            borderColor: '#CCC',
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              height: SIZES.height * 0.11,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '17%',
                height: SIZES.height * 0.07,
                borderRadius: 50,
              }}>
              <Image
                source={item.image}
                style={{
                  width: '100%',
                  height: SIZES.height * 0.07,
                  borderRadius: 50,
                }}
              />
            </View>
            <View style={{width: '80%', paddingHorizontal: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {item.status === 'Active' ? (
                    <Icon name={'circle'} size={8} color={'green'} />
                  ) : (
                    <Icon name={'circle'} size={8} color={'red'} />
                  )}
                  <Text
                    style={[
                      styles.status,
                      {
                        marginLeft: 5,
                        color: item.status === 'Inactive' ? 'red' : 'green',
                      },
                    ]}>
                    {item.status}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.title}>{item.date}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default MemberComponent;

const styles = StyleSheet.create({
  maincontainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    color: '#000',
    fontSize: 10,
  },
  name: {
    color: '#130F26',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
  },
  status: {
    fontSize: 10,
    color: '#000',
    fontWeight: '300',
  },
  description: {
    color: '#446C62',
    fontSize: 10,
    fontWeight: '400',
  },
  date: {
    color: '#767676',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
  },
});
