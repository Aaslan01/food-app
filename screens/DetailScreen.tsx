import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../data/StyleGuide';

const DetailScreen = () => {
  const params = useRoute().params as any;
  console.log('=========params===========================');
  console.log(params);
  console.log('====================================');
  return (
    <SafeAreaView>
        <View>
            <Image source={require('../assets/icons/left-arrow.png')} />
            <Image source={require('../assets/icons/share.png')} />
        </View>
      <Image
        style={{
          height: hp(42),
          width: wp(100),
          resizeMode: 'cover',
        }}
        source={params.item.image}
      />
      <View
        style={{
          marginTop: hp(-2),
          height: hp(60),
          width: wp(100),
          backgroundColor: StyleGuide.colors.white,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}></View>
    </SafeAreaView>
  );
};

export default DetailScreen;
