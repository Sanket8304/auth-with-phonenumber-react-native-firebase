//library imports
import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

//component imports
import styles from './imageBackGroundViewStyle';

/*NNHeader component is commonly used to create HEading of all screen*/
const ImageBackGroundView = props => {
  const {text, image} = props;
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={image} style={styles.backGroundImage}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackGroundView;
