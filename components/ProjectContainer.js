import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, SIZES} from '../constant';
import Icon from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {ProjectIcon} from '../src/SvgComponent/IconComponet';
import LinearGradient from 'react-native-linear-gradient';

const ProjectItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() =>
        navigation.navigate('ProjectDetailsComponent', {selectedItem: item})
      }>
      <View style={styles.iconContainer}>
        <ImageBackground
          source={item.image}
          style={styles.icon}
          imageStyle={{resizeMode: 'cover', borderRadius: 8}}>
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.00)']}
            style={styles.gradient}
            start={{x: 0, y: 1}}
            end={{x: 0, y: 0}}>
            <View
              style={{
                position: 'absolute',
                left: 10,
                bottom: 15,
                width: '100%',
              }}>
              <Text style={styles.categoryTitle}>{item.title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: SIZES.width * 0.011,
                  marginRight: SIZES.width * 0.018,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="location" size={20} color={'#fff'} />
                  <Text style={styles.addressText}>{item.address}</Text>
                </View>
                <View style={{right: 10}}>
                  <ProjectIcon />
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const ProjectContainer = ({data}) => {
  return (
    <View
      style={{
        marginHorizontal: SIZES.width * 0.06,
        marginTop: SIZES.width * 0.04,
        borderRadius: 8,
      }}>
      {data.map(item => (
        <ProjectItem key={item.id} item={item} />
      ))}
    </View>
  );
};

export default ProjectContainer;

const styles = StyleSheet.create({
  categoryItem: {
    height: SIZES.width * 0.37,
    width: '100%',
    marginBottom: SIZES.width * 0.051,
    borderRadius: 8,
  },
  iconContainer: {
    height: SIZES.width * 0.37,
    borderRadius: 8,
    backgroundColor: 'grey',
    width: '100%',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  categoryTitle: {
    color: COLORS.white,
    fontSize: SIZES.width * 0.056,
    fontWeight: '700',
  },
  addressText: {
    color: '#fff',
    fontSize: SIZES.width * 0.029,
    fontWeight: '500',
  },
  gradient: {
    flex: 1,
    borderRadius: 22,
  },
});
