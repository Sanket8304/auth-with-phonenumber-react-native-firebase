//library imports
import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';

//component imports
import styles from './parallaxStickyHeaderStyle';
import images from '../../constants/images';

/*NNHeader component is commonly used to create HEading of all screen*/
const ParallaxStickyHeader = props => {
  const {onPress} = props;

  return (
    <ImageBackground
      source={images.travel}
      resizeMode="contain"
      style={styles.backGroundImage}>
      <View style={styles.tabContainer}>
        <View style={styles.tabSubContainer}>
          <View style={styles.roundView}>
            <Image
              source={images.flight}
              style={styles.flightIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.tabText}>Flights</Text>
        </View>
        <View style={styles.tabSubContainer}>
          <View
            style={[
              styles.roundView,
              {backgroundColor: 'rgba(141, 68, 68, 0.5)'},
            ]}>
            <Image
              source={images.hotel}
              style={styles.flightIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.tabText}>Hotels</Text>
        </View>
        <View style={styles.tabSubContainer}>
          <View
            style={[
              styles.roundView,
              {backgroundColor: 'rgba(247, 180, 22, 0.1)'},
            ]}>
            <Image
              source={images.car_orange}
              style={styles.flightIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.tabText}>Trains & Bus</Text>
        </View>
        <View style={styles.tabSubContainer}>
          <View
            style={[
              styles.roundView,
              {backgroundColor: 'rgba(45, 173, 83, 0.2)'},
            ]}>
            <Image
              source={images.holidays}
              style={styles.flightIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.tabText}>Holiday Packages</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ParallaxStickyHeader;
