//library imports
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

//component imports
import styles from './headerStyle';
import images from '../../constants/images';

/*NNHeader component is commonly used to create HEading of all screen*/
const NNHeader = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'row', borderRadius: 15}}>
        <TouchableOpacity
          style={styles.backButton}
          //   onPress={() => navigation.goBack()}
        >
          <Image
            source={images.backArrow}
            style={styles.backArrow}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NNHeader;
