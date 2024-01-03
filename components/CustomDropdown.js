import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../constant';
import Svg, {Path, Circle} from 'react-native-svg';

const CustomDropdown = ({options, onSelect, placeholder}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = option => {
    setSelectedOption(option);
    onSelect(option);
    toggleDropdown();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.selectedOption}>
        <View>
          <Text
            style={[
              styles.title,
              {color: selectedOption ? '#000' : '#898989'},
            ]}>
            {selectedOption || placeholder}
          </Text>
        </View>
        <View>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={SIZES.width * 0.054}
            height={SIZES.width * 0.054}
            viewBox="0 0 21 21"
            fill="none">
            <Path
              d="M15.4426 7.84847L10.283 12.8627L5.26873 7.70309"
              stroke="#646464"
              stroke-width="1.01749"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.optionsContainer}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelect(option)}
              style={styles.option}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

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
  optionsContainer: {
    position: 'absolute',
    top: SIZES.width * 0.128 ,
    borderWidth: 0.5,
    borderColor: COLORS.borderColor,
    backgroundColor: '#fff',
    width: '100%',
    zIndex: 99,
    elevation: 5,
    shadowColor: COLORS.borderColor,
    borderRadius: 4,
  },
  option: {
    padding: SIZES.width * 0.026,
    paddingLeft: SIZES.width * 0.046,
    borderRadius: 4,
  },
  title: {
    fontSize: SIZES.width * 0.033,
  },
  optionText: {
    fontSize: SIZES.width * 0.033,
    color: '#898989',
  },
});

export default CustomDropdown;
