import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

//component imports
import BaseStyle from '../../styles/BaseStyle';
import Header from '../../component/Header';
import {setAuth} from '../../actions/loginAction';
import styles from './homeStyles';
import images from '../../constants/images';
import ParallaxForeGround from '../../component/ParallaxForeGround';

const Home = props => {
  const {navigation} = props;

  const logout = () => {
    try {
      auth().signOut();
    } catch (error) {
      console.log('error ->', error);
    }
    props.setAuth(undefined);
  };

  return (
    <SafeAreaView style={BaseStyle.safearea}>
      <ParallaxScrollView
        style={{flex: 1, overflow: 'hidden', height: 250}}
        renderBackground={() => (
          <Image
            source={images.travel}
            style={{
              width: window.width,
              height: 250,
            }}
          />
        )}
        renderStickyHeader={() => (
          <View style={{height: 100}}>
            <Image
              source={images.search}
              style={styles.searchIcon}
              resizeMode="contain"
            />
          </View>
        )}
        renderForeground={() => <ParallaxForeGround onPress={() => logout()} />}
        parallaxHeaderHeight={350}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 30}}>Meow!</Text>
        </View>
      </ParallaxScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  auth: state.login.auth,
});

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({setAuth}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
