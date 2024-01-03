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

const FlagTextInput = ({onTextChange}) => {
  const [text, setText] = useState('');

  const handleTextChange = newText => {
    setText(newText);
    // onTextChange(newText); // Call the callback function with the new text value
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        height: SIZES.height * 0.06,
        borderColor: COLORS.borderColor,
        borderWidth: 0.5,
        borderRadius: 4,
      }}>
      <View
        style={{
          width: '28%',
          height: '100%',
          justifyContent: 'center',
          paddingHorizontal: SIZES.width * 0.026,
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
              width: SIZES.width * 0.051,
              height: SIZES.width * 0.051,
              marginRight: SIZES.width * 0.026,
            }}
          />
          <Text
            style={{
              fontSize: SIZES.width * 0.041,
              color: '#000',
              fontWeight: '400',
            }}>
            +971
          </Text>
        </View>
      </View>
      <View style={{width: '72%', height: '100%'}}>
        <TextInput
          value={text}
          onChangeText={handleTextChange} // Use the custom handler
          placeholder="Your Phone Number"
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

export default FlagTextInput;

const styles = StyleSheet.create({});
