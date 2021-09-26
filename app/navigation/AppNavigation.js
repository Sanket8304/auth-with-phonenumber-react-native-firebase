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
import images from '../constants/images';
import styles from './appNavigationStyle';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NavigationStack = () => {
  const auth = false;
  const TabBar = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
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
        {/* <Tab.Screen
          name="Offers"
          component={Offers}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={images.footerIcons.offer_enabled}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                    <View style={styles.activeDot} />
                  </View>
                );
              } else {
                return (
                  <Image
                    source={images.footerIcons.offer_disabled}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <Image
                source={images.footerIcons.icon}
                style={{width: 64, height: 64}}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={images.footerIcons.favourite_enabled}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                    <View style={styles.activeDot} />
                  </View>
                );
              } else {
                return (
                  <Image
                    source={images.footerIcons.favourite_disabled}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                );
              }
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              if (focused) {
                return (
                  <View style={{alignItems: 'center'}}>
                    <Image
                      source={images.footerIcons.profile_enabled}
                      style={styles.icon}
                      resizeMode="contain"
                    />
                    <View style={styles.activeDot} />
                  </View>
                );
              } else {
                return (
                  <Image
                    source={images.footerIcons.profile_disabled}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                );
              }
            },
          }}
        /> */}
      </Tab.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {auth ? (
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

export default NavigationStack;
