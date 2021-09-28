//library imports
import React from 'react';
import {View, Image, FlatList, Text} from 'react-native';

//component imports
import styles from './scrollViewStyle';
import images from '../../constants/images';
import CardItem from '../CardItem';
import HorozontalSlider from '../HorozontalSlider';
import Offers from '../Offers';
import ImageBackGroundView from '../ImageBackGroundView';

/*NNHeader component is commonly used to create HEading of all screen*/
const ScrollView = props => {
  const items = [
    {
      image: images.travel,
      name: 'Gift Cards',
      text: 'Compare & apply for the best credite cards in India.',
    },
    {
      image: images.travel,
      name: 'Deals & Offers',
      text: 'Compare & apply for the best credite cards in India.',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.textView}>
        <View style={styles.coloredBackground} />
        <View style={styles.itemContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />

          <View style={{paddingRight: 10, top: 5}}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.subText}>{item.text}</Text>
          </View>

          <Image
            source={images.right_arrow_blue}
            style={styles.rightIcon}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <CardItem />
        <HorozontalSlider />
        <Offers />
      </View>
      <View style={styles.tripContainer}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Image
              source={images.idea}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.offerText}>TRIP IDEAS</Text>
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.viewText}>View All</Text>
            <Image
              source={images.right_arrow_blue}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
        </View>
        <Text style={styles.text}>Ideas for Your Next Escape</Text>
        <View style={styles.imageViewContainer}>
          <ImageBackGroundView
            image={images.travel}
            text={'Geatway to the Mountain'}
          />
          <ImageBackGroundView
            image={images.travel}
            text={'Geatways for the weekend'}
          />
        </View>
        <View style={styles.imageViewContainer}>
          <ImageBackGroundView
            image={images.travel}
            text={'Honeymoon Destination under $50,000'}
          />
          <ImageBackGroundView
            image={images.travel}
            text={'Win vuchers worth Rs.2000'}
          />
        </View>
      </View>
      <View style={styles.tripContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={images.mountains}
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.tripMoneyText}>TRIPMONEY</Text>
        </View>
        <Text style={styles.text}>Get 2-minute Digital Approval</Text>
        <FlatList
          horizontal={true}
          key={item => item.name}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={items}
          renderItem={renderItem}
          horizontal
        />
      </View>
    </View>
  );
};

export default ScrollView;
