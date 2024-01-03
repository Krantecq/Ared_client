/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../constant';

const NewFlagText = ({onTextChange}) => {
  const [text, setText] = useState('');

  const handleTextChange = newText => {
    setText(newText);
    // onTextChange(newText); // Call the callback function with the new text value
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 55,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          width: '28%',
          height: '100%',
          justifyContent: 'center',
          paddingHorizontal: SIZES.width * 0.026,
          borderColor: '#DDD',
          borderWidth: 1,
          borderRadius: 8,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../assets/images/flag.png')}
            style={{
              width: SIZES.width * 0.06,
              height: SIZES.width * 0.06,
              marginRight: SIZES.width * 0.026,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: '400',
            }}>
            +971
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '69%',
          height: '100%',
          borderColor: '#DDD',
          borderWidth: 1,
          borderRadius: 8,
        }}>
        <TextInput
          value={text}
          onChangeText={handleTextChange} // Use the custom handler
          placeholder="Enter Your Number"
          style={{
            padding: SIZES.width * 0.026,
            flex: 1,
            borderLeftWidth: 0.2,
            borderColor: COLORS.borderColor,
            fontSize: SIZES.width * 0.033,
            paddingLeft: SIZES.width * 0.031,
            color: '#000',
          }}
          placeholderTextColor={'#898989'}
          numberOfLines={1}
          maxLength={10}
          keyboardType="number-pad"
        />
      </View>
    </View>
  );
};

export default NewFlagText;

const styles = StyleSheet.create({});
