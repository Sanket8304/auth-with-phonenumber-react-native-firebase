import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';
import auth from '@react-native-firebase/auth';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//component imports
import BaseStyle from '../../styles/BaseStyle';
import Header from '../../component/Header';
import {setAuth} from '../../actions/loginAction';

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
      <Header logout navigation={navigation} onPress={() => logout()} />
      <WebView
        source={{
          uri: 'https://www.makemytrip.com/flights/?cmp=SEM|D|DF|G|Brand|B_M_Makemytrip_Search_Exact|Brand_Top_5_Exact|RSA|483490446458&s_kwcid=AL!1631!3!483490446458!e!!g!!makemytrip&ef_id=Cj0KCQjwkbuKBhDRARIsAALysV6WLYSy7BOoued4Racjr35P01qsuJknvkg0Q0czoQ8tF5i8yE8kq_IaAldLEALw_wcB:G:s&gclid=Cj0KCQjwkbuKBhDRARIsAALysV6WLYSy7BOoued4Racjr35P01qsuJknvkg0Q0czoQ8tF5i8yE8kq_IaAldLEALw_wcB',
        }}
        style={{flex: 1}}
        androidLayerType="software"
      />
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
