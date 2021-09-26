//library imports
import React from 'react';
import {View, SafeAreaView, KeyboardAvoidingView, Text} from 'react-native';

//component imports

import styles from './tripIdeaStyles';
import BaseStyle from '../../styles/BaseStyle';

const TripIdea = () => {
  return (
    <SafeAreaView style={BaseStyle.safearea}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : ''}
        style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>TripIdea</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TripIdea;
