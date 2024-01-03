import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Svg, {Path, Circle} from 'react-native-svg';
import {SIZES} from '../../constant';
import {useNavigation} from '@react-navigation/native';

const BackButtonComponent = ({data}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={{
          width: SIZES.width * 0.12,
          height: SIZES.height * 0.09,
          justifyContent: 'flex-end',
          alignItems: 'center',
          // backgroundColor:'#000'
        }}
        onPress={() => {
          data ? navigation.navigate(data) : navigation.goBack();
        }}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={SIZES.width * 0.09}
          height={SIZES.height * 0.09}
          viewBox="0 0 30 30"
          fill="none">
          <Circle
            cx="15"
            cy="15"
            r="14.75"
            stroke="#B0B0B0"
            stroke-width="0.5"
          />
          <Path
            d="M20.2981 15.1704H9.3606"
            stroke="#1D493E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M14.8293 20.6392L9.3606 15.1704L14.8293 9.70166"
            stroke="#1D493E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </>
  );
};

export default BackButtonComponent;
