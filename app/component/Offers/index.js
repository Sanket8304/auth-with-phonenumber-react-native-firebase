import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';

import styles from './offersStyle';
import images from '../../constants/images';

const Offers = () => {
  const items = [
    {
      name: 'Trnding',
    },
    {
      name: 'Flights',
    },
    {
      name: 'Hotels',
    },
    {
      name: 'Villas & Apts',
    },
  ];

  const imageItems = [
    {
      image: images.travel,
    },
    {
      image: images.travel,
    },
    {
      image: images.travel,
    },
    {
      image: images.travel,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={index === 0 ? styles.selectedTestView : styles.textView}>
          <Text style={index === 0 ? styles.selectedText : styles.text}>
            {item.name}
          </Text>
        </View>
        {index === 0 ? <View style={styles.line} /> : null}
      </View>
    );
  };

  const renderImageItem = ({item, index}) => {
    return (
      <View style={{backgroundColor: 'rgb(255,255,255)'}}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.subContainer}>
            <Text style={styles.text}>Watch Now</Text>
            <Image
              source={images.right_arrow_blue}
              style={styles.arrowIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Image
            source={images.discount_purpule}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.offerText}>OFFERS</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.viewText}>View All</Text>
          <Image
            source={images.right_arrow_purpule}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </View>
      <FlatList
        horizontal={true}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={renderItem}
        horizontal
        style={{marginTop: 10}}
      />

      <FlatList
        horizontal={true}
        key={item => item.index}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={imageItems}
        renderItem={renderImageItem}
        horizontal
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default Offers;
