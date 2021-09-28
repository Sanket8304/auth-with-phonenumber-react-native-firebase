import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

//component imports
import BaseStyle from '../../styles/BaseStyle';
import images from '../../constants/images';
import ParallaxForeGround from '../../component/ParallaxForeGround';
import ParallaxStickyHeader from '../../component/ParallaxStickyHeader';
import ScrollView from '../../component/ScrollView';

const Home = props => {
  return (
    <SafeAreaView style={BaseStyle.safearea}>
      <ParallaxScrollView
        style={{
          flex: 1,
          overflow: 'hidden',
          height: 250,
        }}
        renderBackground={() => (
          <Image
            source={images.travel}
            style={{
              width: window.width,
              height: 270,
            }}
          />
        )}
        fadeOutForeground={true}
        outputScaleValue={3}
        renderForeground={() => <ParallaxForeGround />}
        renderStickyHeader={() => <ParallaxStickyHeader />}
        stickyHeaderHeight={75}
        parallaxHeaderHeight={270}>
        <View style={{flex: 1}}>
          <ScrollView />
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

export default Home;
