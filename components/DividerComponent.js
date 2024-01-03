import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const DividerComponent = ({onSelectValue}) => {
  const [active, setActive] = useState('Associate');

  const handleToggle = () => {
    const newValue = active === 'Associate' ? 'Advisors' : 'Associate';
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
              borderBottomColor: active === 'Associate' ? '#1D493E' : '#AAC8C0',
              borderBottomWidth: 2,
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                fontWeight: active === 'Associate' ? '400' : '300',
              },
            ]}>
            Associate
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleToggle}
          activeOpacity={0.8}
          style={[
            styles.divider,
            {
              borderBottomColor: active === 'Advisors' ? '#1D493E' : '#AAC8C0',
              borderBottomWidth: 2,
            },
          ]}>
          <Text
            style={[
              styles.title,
              {
                fontWeight: active === 'Advisors' ? '400' : '300',
              },
            ]}>
            Advisors
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DividerComponent;

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
