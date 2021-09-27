import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
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
      <View>
        <Text>Hello</Text>
      </View>
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
