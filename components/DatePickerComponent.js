import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Svg, {Path, Circle} from 'react-native-svg';
import {COLORS, SIZES} from '../constant';

const DatePickerComponent = props => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showDate, setShowDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    let filter = currentDate;
    const dateToSave = currentDate.toLocaleDateString(); // convert date to string
    props.setDate(dateToSave);
    setShowDate(dateToSave);
  };

  const showMode = currentMode => {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setShow(true);
  };

  const showTimepicker = () => {
    showMode('time');
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showDatepicker} style={styles.dateContainer}>
        <Text style={[styles.title, {color: showDate ? '#000' : '#898989'}]}>
          {showDate || props.placeholder}
        </Text>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={SIZES.width * 0.062}
          height={SIZES.width * 0.062}
          viewBox="0 0 24 24"
          fill="none">
          <Path
            d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
            stroke="#CFCFCF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M16 2V6"
            stroke="#CFCFCF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M8 2V6"
            stroke="#CFCFCF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M3 10H21"
            stroke="#CFCFCF"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    marginTop: SIZES.width * 0.051,
    fontSize: SIZES.width * 0.046,
    textAlign: 'center',
    color: '#000',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.width * 0.046,
    borderWidth: 0.5,
    borderRadius: 4,
    width: '100%',
    height: 55,
    borderColor: COLORS.borderColor,
    alignItems: 'center',
  },
  title: {
    fontSize: SIZES.width * 0.033,
  },
});

export default DatePickerComponent;
