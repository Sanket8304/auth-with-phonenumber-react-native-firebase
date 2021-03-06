//library imports
import React from 'react';
import {View, Image, Text} from 'react-native';

//component imports
import styles from './parallaxForeGroundStyle';
import images from '../../constants/images';

/*NNHeader component is commonly used to create HEading of all screen*/
const ParallaxForeGround = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedheaderView}>
        <View style={styles.subcontainer}>
          <Image
            source={images.menu}
            style={styles.menuIcon}
            resizeMode="contain"
          />

          <View style={styles.square}>
            <Text style={styles.myText}>my</Text>
          </View>
        </View>

        <View style={styles.subcontainer}>
          <Image
            source={images.search}
            style={styles.searchIcon}
            resizeMode="contain"
          />

          <Image
            source={images.wallet}
            style={styles.walletIcon}
            resizeMode="contain"
          />

          <View style={styles.view}>
            <Image
              source={images.suitcase_red}
              style={styles.suitcase}
              resizeMode="contain"
            />
            <Text style={[styles.myText, {paddingHorizontal: 5}]}>Biz</Text>
            <Image
              source={images.right_arrow}
              style={styles.rightArrowIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View style={styles.headerSubContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.text}>Good Afternoon, Sanket</Text>
          <Text style={styles.subText}>
            Share your birthday details with us, so we can coustomise our
            services for you
          </Text>
        </View>

        <Image
          source={images.right_arrow}
          style={styles.rightArrowIcon1}
          resizeMode="contain"
        />

        <Image
          source={images.vertical_dots}
          style={styles.verticalDots}
          resizeMode="contain"
        />
      </View>

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
            style={[styles.roundView, {backgroundColor: 'rgb(240, 177, 217)'}]}>
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
            style={[styles.roundView, {backgroundColor: 'rgb(252, 229, 182)'}]}>
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
            style={[styles.roundView, {backgroundColor: 'rgb(217, 255, 243)'}]}>
            <Image
              source={images.holidays}
              style={styles.flightIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.tabText}>Holiday Packages</Text>
        </View>
      </View>
    </View>
  );
};

export default ParallaxForeGround;
