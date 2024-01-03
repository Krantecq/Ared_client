import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import BackTopbar from '../../components/BackTopbar';
import ImageUploadContainer from '../../components/ImageUploadContainer';
import {COLORS} from '../../constant';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';

const SupportScreen = ({navigation}) => {
  const [support, setSupport] = useState(false);
  const [description, setDescription] = useState('');
  const State = ['Delhi', 'Punjab', 'Lucknow'];

  const handleDescriptionChange = text => {
    setDescription(text);
  };

  const handleOptionSelect = selectedOption => {
    console.log('Selected:', selectedOption);
  };

  const handleSupport = () => {
    setSupport(!support);
  };
  if (support == true) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={'transparent'} />
        <View>
          <BackTopbar name={'Support'} />
        </View>
        <View
          style={[styles.mainContainer, {alignItems: 'center', marginTop: 20}]}>
          <View>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="53"
              viewBox="0 0 53 53"
              fill="none">
              <Path
                d="M26.5001 48.5833C38.6459 48.5833 48.5834 38.6458 48.5834 26.5C48.5834 14.3542 38.6459 4.41666 26.5001 4.41666C14.3542 4.41666 4.41675 14.3542 4.41675 26.5C4.41675 38.6458 14.3542 48.5833 26.5001 48.5833Z"
                stroke="#1D493E"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                opacity="0.34"
                d="M17.1145 26.4998L23.3641 32.7494L35.8853 20.2502"
                stroke="#1D493E"
                stroke-width="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: '#737373',
                fontSize: 14,
                fontWeight: '400',
                textAlign: 'center',
                lineHeight: 22,
              }}>
              Thank you for submitting your request for support. We will be in
              touch with you shortly.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <BackTopbar name={'Support'} />
      </View>
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.title}>How can we help?</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your description here"
            multiline
            numberOfLines={5}
            value={description}
            onChangeText={handleDescriptionChange}
            style={styles.input}
            textAlignVertical="top" // Align text to the top vertically
            textAlign="left" // Align text to the left horizontally
            placeholderTextColor={'#898989'}
          />
        </View>
        <View style={{marginTop: 15}}>
          <ImageUploadContainer
            options={State}
            onSelect={handleOptionSelect}
            placeholder={'Screen Shot'}
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.btncontainer}
            onPress={() => handleSupport()}>
            <Text style={styles.btnTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', marginTop: 35}}>
          <Text style={styles.description}>
            For assistance, feel free to reach out to our support team at any
            time. You can contact us via phone at 1800 809 8028 or through email
            at help@ared.ai. Rest assured, the Ared team is here to provide
            support whenever you need it.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    padding: 20,
  },
  inputContainer: {
    marginTop: 14,
    borderColor: COLORS.borderColor,
    borderWidth: 0.5,
    borderRadius: 4,
    padding: 5,
  },
  input: {
    minHeight: 100,
    justifyContent: 'flex-start',
    fontSize: 13,
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
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 10,
    color: '#000',
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default SupportScreen;
