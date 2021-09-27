//library imports
import React from 'react';
import {View, Image, Text} from 'react-native';

//component imports
import styles from './cardItemStyle';
import images from '../../constants/images';

/*NNHeader component is commonly used to create HEading of all screen*/
const ScrollView = props => {
  const {onPress} = props;

  return (
    <View style={styles.titleCard}>
      <View style={styles.cardItem}>
        <View style={styles.itemView}>
          <Image source={images.car} style={styles.icon} resizeMode="contain" />
          <Text style={styles.text}>Airport Cabs</Text>
        </View>
        <View style={styles.itemView}>
          <Image
            source={images.idea}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Self Drive</Text>
        </View>
      </View>

      <View style={styles.cardItem}>
        <View style={styles.itemView}>
          <Image
            source={images.modern_house}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Vilas & Apts</Text>
        </View>
        <View style={styles.itemView}>
          <Image
            source={images.location}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Weekend Getaways</Text>
        </View>
      </View>

      <View style={styles.cardItem}>
        <View style={[styles.itemView, {paddingBottom: 10}]}>
          <Image
            source={images.car_orange}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Outstation Cabs</Text>
        </View>
        <View style={styles.itemView}>
          <Image
            source={images.tickets}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Train PNR Status</Text>
        </View>
      </View>

      <View style={[styles.cardItem, {borderRightWidth: 0, marginRight: 0}]}>
        <View style={[styles.itemView, {paddingBottom: 10}]}>
          <Image source={images.run} style={styles.icon} resizeMode="contain" />
          <Text style={styles.text}>Activities & Tours</Text>
        </View>
        <View style={styles.itemView}>
          <Image
            source={images.document}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.text}>Visa Services</Text>
        </View>
      </View>
    </View>
  );
};

export default ScrollView;
