//library imports
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

//component imports

import styles from './loginStyle';
import BaseStyle from '../../styles/BaseStyle';
import Spinner from '../../component/Spinner';
import images from '../../constants/images';

const Login = props => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(undefined);
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [openModal, setOpenModal] = useState(false);
  const [showCountryModal, setShowCountryModal] = useState(false);

  const withFilter = true;
  const withFlag = false;
  const withFlagButton = false;
  const openCountryModal = false;
  const withCallingCodeButton = true;
  const withCallingCode = true;

  const valid = phoneNumber && !(phoneNumber.length < 7);

  const onSelect = country => {
    if (country.callingCode.length > 0) {
      setCountryCode(country.cca2);
      setCallingCode(country?.callingCode[0]);
    }
  };

  const handleSubmit = async () => {};

  return loading ? (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Spinner />
    </View>
  ) : (
    <SafeAreaView style={BaseStyle.safearea}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <View style={{marginBottom: 15}}>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                onPress={() => setShowCountryModal(true)}
                style={styles.leftComponent}>
                <CountryPicker
                  {...{
                    countryCode,
                    withCallingCode,
                    onSelect,
                    withFlag,
                    withCallingCodeButton,
                    withFlagButton,
                    withFilter,
                  }}
                  onClose={() => setShowCountryModal(false)}
                  visible={openCountryModal}
                />
                <Image
                  source={images.dropDown}
                  style={styles.dropDownIcon}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <TextInput
                placeholder={'mobile number'}
                keyboardType="number-pad"
                onChangeText={value => {
                  setPhoneNumber(value);
                }}
                value={phoneNumber}
                style={styles.inputBox}
                placeholderTextColor={'#B9B9B9'}
              />
            </View>
          </View>

          <TouchableOpacity
            disabled={!valid}
            onPress={() => handleSubmit()}
            style={[
              styles.primaryButton,
              {backgroundColor: !valid ? '#B9B9B9' : '#3278F2'},
            ]}>
            <Text style={styles.continueText} type="normalText">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
