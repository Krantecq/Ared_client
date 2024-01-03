/* eslint-disable react-native/no-inline-styles */
import { View, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from './DashboardScreen';
import LeadersScreen from './LeadersScreen';
import MyAredScreen from './MyAredScreen';
import ProfileScreen from './ProfileScreen';
import {
  HomeIconComponent,
  ProfileIconComponent,
  MyAredIconComponent,
  CertificateIconComponent,
  MyAredFillIconComponent,
  MyAredIconFilledComponent,
  CertificateFillIconComponent,
  ProfileFilledIconComponent,
} from '../SvgComponent/HomeIconComponent';
import {createStackNavigator} from '@react-navigation/stack';
import CouponcodeScreen from './CouponcodeScreen';
import LearningScreen from './LearningScreen';
import AboutScreen from './AboutScreen';
import LegalScreen from './LegalScreen';
import {SIZES} from '../../constant';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress, accessibilityState}) => {
  const isFocused = accessibilityState.selected;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        marginTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: SIZES.width * 0.188,
        height: SIZES.height * 0.09,
        borderRadius: 40,
        overflow: 'hidden',
        marginHorizontal: SIZES.width * 0.01,
      }}
      onPress={onPress}>
      <View
        style={{
          width: SIZES.width * 0.185,
          height: SIZES.height * 0.09,
          borderRadius: 35,
          backgroundColor: isFocused ? '#F6FFFB' : 'white',
          elevation: 8,
          shadowColor: '#ababab',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Homestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
    </Stack.Navigator>
  );
};

const CertificateStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LearningScreen" component={LearningScreen} />
      <Stack.Screen name="CouponcodeScreen" component={CouponcodeScreen} />
    </Stack.Navigator>
  );
};

const MyAredstack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyAredScreen" component={MyAredScreen} />
    </Stack.Navigator>
  );
};

const Profilestack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="LearningScreen" component={LearningScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="LegalScreen" component={LegalScreen} />
      <Stack.Screen name="LeadersScreen" component={LeadersScreen} />
    </Stack.Navigator>
  );
};

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="DashboardScreen"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'relative',
          alignItems: 'center',
          height: SIZES.height * 0.121,
          borderRadius: 0,
          // borderTopWidth: 0,
          elevation:  Platform.OS === 'ios' ? 3 : 20,
          paddingHorizontal: SIZES.width * 0.028,
          shadowOffset: {
            shadowOffset: {
              width: 0,
              height: Platform.OS === 'ios' ? -10 : -20,
            },
          },
          shadowOpacity: Platform.OS === 'ios' ? 0.09 : 0.3,
          shadowRadius: 10,
          boxShadow: '0px 1px 25px 6px rgba(0, 0, 0, 0.06)',
        },
      }}>
      <Tab.Screen
        name="Homestack"
        component={Homestack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) =>
            focused ? <MyAredFillIconComponent /> : <HomeIconComponent />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="MyAredstack"
        component={MyAredstack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) =>
            focused ? <MyAredIconFilledComponent /> : <MyAredIconComponent />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="CertificateStack"
        component={CertificateStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <CertificateFillIconComponent />
            ) : (
              <CertificateIconComponent />
            ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Profilestack"
        component={Profilestack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) =>
            focused ? <ProfileFilledIconComponent /> : <ProfileIconComponent />,
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;

