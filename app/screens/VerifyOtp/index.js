//library imports
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

//component imports
import styles from './verifyOtpStyle';
import BaseStyle from '../../styles/BaseStyle';
import Spinner from '../../component/Spinner';
import Header from '../../component/Header';

const VerifyOtp = props => {
  const {navigation} = props;
  //   const {phoneNumber} = props.route.params;

  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(undefined);

  const phoneNumber = '+91 9408630920';

  const handleVerify = async () => {};

  return (
    <SafeAreaView style={BaseStyle.safearea}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={{flex: 1}}>
        <Header back={true} navigation={navigation} rightIcon={true} />
        {loading ? (
          <Spinner />
        ) : (
          <View style={styles.container}>
            <View style={BaseStyle.container}>
              <Text type="normalText" style={styles.subText}>
                {`Enter code sent to your number ${phoneNumber}`}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <OTPInputView
                  style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    height: 100,
                  }}
                  pinCount={4}
                  code={code}
                  onCodeChanged={code => {
                    setCode(code);
                  }}
                  autoFocusOnLoad
                  codeInputFieldStyle={[
                    styles.codeInputFieldStyle,
                    {
                      backgroundColor: code
                        ? 'rgba(50, 120, 242, 0.1)'
                        : '#F5F5F5',
                      color: '#42403D',
                      fontFamily: 'CircularStd-Bold',
                      fontSize: 26,
                    },
                  ]}
                  keyboardType="number-pad"
                />
              </View>

              <Text
                // onPress={() => handleResendOTP()}
                type="headerText"
                style={styles.resendOtptext}>
                Resend OTP
              </Text>

              <TouchableOpacity
                disabled={!(code?.length === 4)}
                onPress={() => handleVerify()}
                style={[
                  styles.primaryButton,
                  {
                    backgroundColor: !(code?.length === 4)
                      ? '#B9B9B9'
                      : '#3278F2',
                  },
                ]}>
                <Text style={styles.verifyText} type="normalText">
                  Verify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyOtp;
