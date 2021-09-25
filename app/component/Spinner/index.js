//library imports
import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

//component imports
import styles from './spinnerStyle';

const NNSpinner = ({size, color}) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator
        style={{backgroundColor: '#ffffff', borderRadius: 100, padding: 5}}
        color={color || '#000000'}
        size={size || 'large'}
      />
    </View>
  );
};

export default NNSpinner;
