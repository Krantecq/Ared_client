import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, SIZES} from '../constant';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {boxesData} from '../constant/data';

const SelectedNeutalisedCompoent = () => {
  const navigation = useNavigation();
  const [selectedBox, setSelectedBox] = useState(1);

  return (
    <View style={styles.container}>
      {boxesData.map((box, index) => (
        <View key={box.id} style={styles.boxContainer}>
          <TouchableOpacity
            style={[styles.box, index % 2 === 1 ? null : null]}
            onPress={() => setSelectedBox(box.id)}
            activeOpacity={0.8}>
            <ImageBackground
              source={box.image}
              style={styles.imageBackground}
              imageStyle={styles.boxImage}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.00)']}
                style={styles.gradient}
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}>
                <View style={styles.textBox}>
                  <Text style={styles.boxTitle}>{box.title}</Text>
                  <Text style={styles.boxSubtitle}>{box.subtitle}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text style={styles.boxPrice}>{box.price}</Text>
                    </View>
                    <View>
                      <View
                        style={{
                          width: 18,
                          height: 18,
                          borderWidth: 2,
                          borderColor: '#fff',
                          borderRadius: 30,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <View style={ selectedBox === box.id ? styles.selectedBox : null}></View>
                      </View>
                    </View>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.width * 0.0,
    flexWrap: 'wrap',
  },
  boxContainer: {
    width: '48%',
    marginBottom: SIZES.height * 0.013,
    backgroundColor: '#000',
    borderRadius: 12,
  },
  box: {
    height: SIZES.height * 0.17,
    borderRadius: 7,
    overflow: 'hidden',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    borderRadius: 7,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'flex-end', // Align the content to the bottom
    alignItems: 'center', // Center horizontally
  },
  textBox: {
    padding: SIZES.width * 0.025,
    borderRadius: 10,
    width: '100%',
  },
  boxTitle: {
    fontSize: SIZES.width * 0.028,
    fontWeight: '400',
    color: COLORS.white,
    marginBottom: SIZES.width * 0.01,
  },
  boxSubtitle: {
    fontSize: SIZES.width * 0.019,
    color: COLORS.white,
    marginBottom: SIZES.width * 0.01,
  },
  boxPrice: {
    fontSize: SIZES.width * 0.045,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  selectedBox: {
    width: 9,
    height: 9,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
});

export default SelectedNeutalisedCompoent;
