import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const MemberDivider = ({onSelectValue}) => {
  const [active, setActive] = useState('Individuals');

  const handleToggle = () => {
    const newValue = active === 'Individuals' ? 'Corporates' : 'Individuals';
    setActive(newValue);
    onSelectValue(newValue); // Call the callback with the selected value
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexdirection}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleToggle}
          style={[
            styles.divider,
            {
              borderBottomColor: active === 'Individuals' ? '#1D493E' : '#AAC8C0',
              borderBottomWidth: 2,
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                fontWeight: active === 'Individuals' ? '400' : '300',
              },
            ]}>
            Individuals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleToggle}
          activeOpacity={0.8}
          style={[
            styles.divider,
            {
              borderBottomColor: active === 'Corporates' ? '#1D493E' : '#AAC8C0',
              borderBottomWidth: 2,
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                fontWeight: active === 'Corporates' ? '400' : '300',
              },
            ]}>
            Corporates
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MemberDivider;

const styles = StyleSheet.create({
  container: {
    height: 60,
    marginTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#AAC8C0',
  },
  flexdirection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  divider: {
    width: '50%',
    alignItems: 'center',
    height: 60,
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '300',
  },
});
