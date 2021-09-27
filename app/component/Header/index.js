//library imports
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';

//component imports
import styles from './headerStyle';
import images from '../../constants/images';

/*NNHeader component is commonly used to create HEading of all screen*/
const NNHeader = props => {
  const {navigation, logout, onPress} = props;

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row', borderRadius: 15}}>
        {logout ? (
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => onPress()}>
            <Image
              source={images.logout}
              style={styles.logout}
              resizeMode="contain"
            />
            <Text styles={styles.text}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={images.backArrow}
              style={styles.backArrow}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NNHeader;
