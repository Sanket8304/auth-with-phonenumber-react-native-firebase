//library imports
import React from 'react';
import {View, SafeAreaView, KeyboardAvoidingView, Text} from 'react-native';

//component imports

import styles from './tripMony';
import BaseStyle from '../../styles/BaseStyle';

const TripMony = () => {
  return (
    <SafeAreaView style={BaseStyle.safearea}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>TripMony</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TripMony;
