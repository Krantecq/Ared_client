import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constant';
import BackTopbar from '../../components/BackTopbar';
import {launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FlagTextInput from '../../components/FlagTextInput';
import CommonTextInputContainer from '../../components/CommonTextInputContainer';
import DatePickerComponent from '../../components/DatePickerComponent';
import ImageUploadContainer from '../../components/ImageUploadContainer';

const EditProfileScreen = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const Country = ['India', 'Dubai', 'Nepal'];
  const State = ['Delhi', 'Punjab', 'Lucknow'];
  const Gender = ['Male', 'Female'];
  const [date, setDate] = useState('');

  const handleOptionSelect = selectedOption => {
    console.log('Selected:', selectedOption);
  };

  const selectImage = () => {
    Keyboard.dismiss();
    launchImageLibrary({quality: 0.5, selectionLimit: 1}, async fileobj => {
      if (fileobj.errorCode || fileobj.didCancel) {
        return console.log('You should handle errors or user cancellation!');
      }

      try {
        const imageUri = fileobj.assets[0].uri;
        const fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
        console.log(fileName);
        setSelectedOption(imageUri);
      } catch (error) {
        console.error(error);
      }
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      <View>
        <BackTopbar name={'Profile'} />
      </View>
      <View style={styles.imageContainer}>
        <View style={{width: 80, height: 80}}>
          <Image
            source={
              selectedOption
                ? {uri: selectedOption} // Display selected image
                : require('../../assets/images/profile.png') // Display default image
            }
            style={{width: '100%', height: '100%', borderRadius: 50}}
          />
          <TouchableOpacity
            style={{position: 'absolute', bottom: 5, left: 60, elevation: 10}}
            onPress={selectImage}>
            <Image source={require('../../assets/images/camera.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.textinputContainer}>
          <View>
            <CommonTextInputContainer placeholder={'Name'} />
          </View>
          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'Gender'} />
          </View>
          <View style={{marginTop: 13}}>
            <DatePickerComponent setDate={setDate} placeholder={'DOB'} />
          </View>
          <View style={{marginTop: 13}}>
            <FlagTextInput />
          </View>
          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'Email Address'} />
          </View>
          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'Country'} />
          </View>
          <View style={{marginTop: 13}}>
            <CommonTextInputContainer placeholder={'City'} />
          </View>

          <View style={{marginTop: 13}}>
            <ImageUploadContainer
              options={State}
              onSelect={handleOptionSelect}
              placeholder={'Your ID Proof'}
            />
          </View>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btncontainer}
              onPress={() => navigation.goBack()}>
              <Text style={styles.btnTitle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: 100,
    marginTop: 30,
    marginHorizontal: 50,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  maincontainer: {
    marginHorizontal: 25,
    marginTop: 10,
  },
  titlecontainer: {
    width: '100%',
    height: 30,
  },
  title: {
    fontSize: 24,
    color: COLORS.btn,
    lineHeight: 28,
    letterSpacing: -0.48,
    fontFamily: 'Inter-Bold',
  },
  subtitlecontainer: {
    marginTop: 10,
    width: '100%',
    height: 20,
  },
  subtitle: {
    fontSize: 12,
    color: COLORS.btn,
    fontFamily: 'Inter-Regular',
    lineHeight: 18,
  },
  textinputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  btn: {
    width: '100%',
    height: 48,
    backgroundColor: COLORS.btn,
    marginTop: 22,
    borderRadius: 5,
  },
  btnTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
  },
  btncontainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
