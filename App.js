import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './src/OnboardingScreen/Splash';
import SignUpScreen from './src/RegistrationScreen/SignUpScreen';
import OtpScreen from './src/RegistrationScreen/OtpScreen';
import BottomTabScreen from './src/BottomTabsScreen/BottomTabScreen';
import SupportScreen from './src/BottomTabsScreen/SupportScreen';
import EditProfileScreen from './src/BottomTabsScreen/EditProfileScreen';
import ProjectScreen from './src/BottomTabsScreen/ProjectScreen';
import ProjectDetailsComponent from './components/ProjectDetailsComponent';
import IndividualScreen from './src/BottomTabsScreen/IndividualScreen';
import CarbonCalculaterAddDetails from './src/BottomTabsScreen/CarbonCalculaterAddDetails';
import IndiviualCalculater from './components/IndiviualCalculater';
import NewOnboardingScreen from './src/OnboardingScreen/NewOnboardingScreen';
import NewLoginScreen from './src/RegistrationScreen/NewLoginScreen';
import NeutraliseScreen from './src/BottomTabsScreen/NeutraliseScreen';
import PaymentScreen from './src/BottomTabsScreen/PaymentScreen';
import SuccessfullScreen from './src/BottomTabsScreen/SuccessfullScreen';
import CustomeScreen from './src/BottomTabsScreen/CustomeScreen';
import CarbonCalculater from './src/BottomTabsScreen/CarbonCalculater';
import LoginScreen from './src/OnboardingScreen/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen name="SupportScreen" component={SupportScreen} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
        <Stack.Screen
          name="ProjectDetailsComponent"
          component={ProjectDetailsComponent}
        />
        <Stack.Screen name="IndividualScreen" component={IndividualScreen} />
        <Stack.Screen
          name="CarbonCalculaterAddDetails"
          component={CarbonCalculaterAddDetails}
        />
        <Stack.Screen
          name="IndiviualCalculater"
          component={IndiviualCalculater}
        />
        <Stack.Screen
          name="NewOnboardingScreen"
          component={NewOnboardingScreen}
        />
        <Stack.Screen name="NewLoginScreen" component={NewLoginScreen} />
        <Stack.Screen name="NeutraliseScreen" component={NeutraliseScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="SuccessfullScreen" component={SuccessfullScreen} />
        <Stack.Screen name="CustomeScreen" component={CustomeScreen} />
        <Stack.Screen name="CarbonCalculater" component={CarbonCalculater} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
