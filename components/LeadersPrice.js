import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constant';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';

const LeadersPrice = () => {
  return (
    <View style={styles.container}>
      <View style={{paddingLeft: 45}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none">
          <Path
            d="M32 45.3334V46.6667V48"
            stroke="#00EA77"
            stroke-width="1.3913"
            stroke-linecap="round"
          />
          <Path
            d="M32 16V17.3333V18.6667"
            stroke="#00EA77"
            stroke-width="1.3913"
            stroke-linecap="round"
          />
          <Path
            d="M40 25.3333C40 21.6514 36.4184 18.6666 32 18.6666C27.5816 18.6666 24 21.6514 24 25.3333C24 29.0152 27.5816 32 32 32C36.4184 32 40 34.9848 40 38.6666C40 42.3485 36.4184 45.3333 32 45.3333C27.5816 45.3333 24 42.3485 24 38.6666"
            stroke="#00EA77"
            stroke-width="1.55"
            stroke-linecap="round"
          />
          <Path
            d="M18.6666 8.90089C22.5889 6.63196 27.1429 5.33337 31.9999 5.33337C46.7274 5.33337 58.6666 17.2724 58.6666 32C58.6666 46.7275 46.7274 58.6667 31.9999 58.6667C17.2723 58.6667 5.33325 46.7275 5.33325 32C5.33325 27.143 6.63184 22.589 8.90077 18.6667"
            stroke="#1D493E"
            stroke-width="1.85507"
            stroke-linecap="round"
          />
        </Svg>
      </View>
      <View style={{paddingLeft: 25,alignItems:'center'}}>
        <View>
          <Text style={styles.title}>Total Earnings</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.subTitle}>$1,893.44</Text>
        </View>
      </View>
    </View>
  );
};

export default LeadersPrice;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    height: SIZES.height * 0.15,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#CCC',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: '300',
  },
  subTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 28,
    lineHeight: 32,
    color:'#1D493E',
    letterSpacing:-0.5
  },
});
