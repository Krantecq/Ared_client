import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Keyboard} from 'react-native';
import {COLORS, SIZES} from '../constant';
import Svg, {Path, Circle} from 'react-native-svg';
import {launchImageLibrary} from 'react-native-image-picker';

const ImageUploadContainer = ({options, onSelect, placeholder}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const selectImage = () => {
    Keyboard.dismiss();
    launchImageLibrary({quality: 0.5, selectionLimit: 1}, async fileobj => {
      if (fileobj.errorCode || fileobj.didCancel) {
        return console.log('You should handle errors or user cancellation!');
      }

      try {
        const imageUri = fileobj.assets[0].uri;
        const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
        console.log(fileName);
        setSelectedOption(fileName);
      } catch (error) {
        console.error(error);
      }
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectImage} style={styles.selectedOption}>
        <View style={{width: '60%'}}>
          <Text
            style={[styles.title, {color: selectedOption ? '#000' : '#898989'}]}
            numberOfLines={1}>
            {selectedOption || placeholder}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={SIZES.width * 0.041}
            height={SIZES.width * 0.041}
            viewBox="0 0 16 16"
            fill="none">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.9075 4.92437V11.0376C14.9075 13.3026 13.49 14.9001 11.225 14.9001H4.7375C2.4725 14.9001 1.0625 13.3026 1.0625 11.0376V4.92437C1.0625 2.65937 2.48 1.06262 4.7375 1.06262H11.225C13.49 1.06262 14.9075 2.65937 14.9075 4.92437Z"
              stroke="#CFCFCF"
              stroke-width="1.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M2.96094 11.3231L4.10694 10.1134C4.50519 9.69111 5.16894 9.67086 5.59194 10.0684C5.60469 10.0811 6.29469 10.7824 6.29469 10.7824C6.71094 11.2061 7.39119 11.2129 7.81494 10.7974C7.84269 10.7704 9.56544 8.68086 9.56544 8.68086C10.0094 8.14161 10.8067 8.06436 11.3467 8.50911C11.3827 8.53911 13.0102 10.2094 13.0102 10.2094"
              stroke="#CFCFCF"
              stroke-width="1.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.73452 5.8498C6.73452 6.57655 6.14577 7.1653 5.41902 7.1653C4.69227 7.1653 4.10352 6.57655 4.10352 5.8498C4.10352 5.12305 4.69227 4.5343 5.41902 4.5343C6.14577 4.53505 6.73452 5.12305 6.73452 5.8498Z"
              stroke="#CFCFCF"
              stroke-width="1.125"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
          <Text
            style={{
              marginLeft: SIZES.width * 0.013,
              fontSize: SIZES.width * 0.033,
              color: '#898989',
            }}>
            Upload
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUploadContainer;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
  },
  selectedOption: {
    padding: SIZES.width * 0.026,
    paddingLeft: SIZES.width * 0.046,
    borderWidth: 0.5,
    borderRadius: 4,
    width: '100%',
    height: SIZES.height * 0.06,
    borderColor: COLORS.borderColor,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.width * 0.033,
  },
});
