import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';

import styles from './textSliderStyle';
import images from '../../constants/images';

const HorozontalSlider = () => {
  const items = [
    {
      image: images.gift,
      name: 'Gift Cards',
    },
    {
      image: images.discount_black,
      name: 'Deals & Offers',
    },
    {
      image: images.underground,
      name: 'Metro',
    },
    {
      image: images.cross,
      name: 'MMTB',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.textView}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      horizontal={true}
      key={item => item.name}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      data={items}
      renderItem={renderItem}
      horizontal
    />
  );
};

export default HorozontalSlider;
