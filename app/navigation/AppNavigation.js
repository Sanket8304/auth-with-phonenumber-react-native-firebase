import React from 'react';
import {View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from '../screens/Login';
import VerifyOtp from '../screens/VerifyOtp';
import Home from '../screens/Home';
import MyTrip from '../screens/MyTrip';
import Offers from '../screens/Offers';
import TripIdea from '../screens/TripIdea';
import TripMony from '../screens/TripMony';
import images from '../constants/images';
import styles from './appNavigationStyle';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NavigationStack = props => {
  const TabBar = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={images.home}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <View style={styles.activeDot} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="MyTrip"
          component={MyTrip}
          options={{
            tabBarLabel: 'MyTrip',
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={images.suitcase}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <View style={styles.activeDot} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offers}
          options={{
            tabBarLabel: 'Offers',
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={images.discount}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <View style={styles.activeDot} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="TripIdea"
          component={TripIdea}
          options={{
            tabBarLabel: 'TripIdea',
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={images.lamp}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <View style={styles.activeDot} />
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="TripMony"
          component={TripMony}
          options={{
            tabBarLabel: 'TripMony',
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={images.snowed_mountains}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                  <View style={styles.activeDot} />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {props.auth ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={TabBar} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = state => ({
  auth: state.login.auth,
});

export default connect(mapStateToProps)(NavigationStack);
