import {View, Text, ImageBackground, Platform} from 'react-native';
import React from 'react';
import StyleGuide from '../data/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import FullButton from '../component/FullButton';

export default function MainScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../assets/background-image.jpeg')}>
      <View
        style={{
          flex: 1,
          backgroundColor: StyleGuide.colors.black,
          opacity: 0.4,
        }}
      />
      <View
        style={{
          height: hp(96),
          width: wp(100),
          position: 'absolute',
          padding: wp(4),
          justifyContent: 'flex-end',
        }}>
        <Text style={StyleGuide.OpeningHanding}>
          Let Your Favorite Food Find You
        </Text>
        <Text
          style={{
            color: StyleGuide.colors.light,
            fontSize: hp(2),
            fontFamily: 'Poppins-Regular',
            top: Platform.OS == 'android' ? hp(-2) : 0,
            marginBottom: Platform.OS == 'ios' ? hp(2) : 0,
          }}>
          It is a long established fact that a reader will be distracted by the
          readable page when looking at
        </Text>
        <FullButton
          text={'Explore Now'}
          onPress={() => navigation.push('Restaurant')}
        />
      </View>
    </ImageBackground>
  );
}
