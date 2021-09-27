//library imports
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

//component imports
import styles from './scrollViewStyle';
import images from '../../constants/images';
import CardItem from '../CardItem';
import HorozontalSlider from '../HorozontalSlider';

/*NNHeader component is commonly used to create HEading of all screen*/
const ScrollView = props => {
  const {onPress} = props;

  return (
    <View style={styles.container}>
      <CardItem />
      <HorozontalSlider />
    </View>
  );
};

export default ScrollView;
