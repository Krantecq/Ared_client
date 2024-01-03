import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Svg, {Path, Defs, ClipPath, Rect, G} from 'react-native-svg';
import {SIZES} from '../constant';

const Searchbar = () => {
  return (
    <View style={styles.maincontainer}>
      <View style={{width: '10%', alignItems: 'center', paddingBottom: SIZES.width * 0.01}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={SIZES.width * 0.05}
          height={SIZES.height * 0.05}
          viewBox="0 0 16 16"
          fill="none">
          <G clip-path="url(#clip0_131_7122)">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.1462 12.1734C13.3719 12.1734 13.5884 12.2633 13.7477 12.4232L17.2294 15.9194C17.5902 16.2799 17.5902 16.8691 17.2294 17.2296C16.8687 17.5901 16.2792 17.5901 15.9184 17.2296L12.4279 13.7411C12.2686 13.5819 12.179 13.3658 12.179 13.1405V12.9003C12.179 12.8345 12.1535 12.7712 12.1078 12.7239C12.0144 12.627 11.8621 12.6203 11.7564 12.7035C10.544 13.6583 8.94123 14.1372 7.24301 13.8529C4.79699 13.4396 2.8437 11.3995 2.54454 8.93737C2.08702 5.21773 5.21932 2.08726 8.94114 2.54452C11.4048 2.8435 13.446 4.79564 13.8596 7.24023C14.144 8.93739 13.6649 10.5392 12.7096 11.7508C12.6263 11.8565 12.6331 12.0089 12.73 12.1023C12.7773 12.1479 12.8405 12.1734 12.9062 12.1734H13.1462ZM4.26028 8.21629C4.26028 10.4059 6.0288 12.1733 8.21966 12.1733C10.4105 12.1733 12.179 10.4059 12.179 8.21629C12.179 6.02671 10.4105 4.25923 8.21966 4.25923C6.0288 4.25923 4.26028 6.02671 4.26028 8.21629Z"
              fill="#BABABA"
            />
          </G>
          <Defs>
            <ClipPath id="clip0_131_7122">
              <Rect width="15.9156" height="15.9156" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      </View>

      <View style={{paddingLeft: SIZES.width * 0.013, width: '90%'}}>
        <TextInput
          placeholder="Search"
          style={{
            fontSize: SIZES.width * 0.033,
            fontWeight: '400',
            color: '#000',
          }}
          placeholderTextColor={'#BABABA'}
        />
      </View>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  maincontainer: {
    marginTop: SIZES.width * 0.064,
    marginHorizontal: SIZES.width * 0.051,
    height: SIZES.width * 0.128,
    borderWidth: 0.5,
    borderColor: '#C5C5C5',
    borderRadius: 4,
    flexDirection: 'row',
    paddingLeft: SIZES.width * 0.026,
    paddingRight: SIZES.width * 0.026,
    alignItems: 'center',
  },
});
