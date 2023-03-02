import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import StyleGuide from '../data/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

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
          zIndex: 2,
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
            top: hp(-2),
          }}>
          It is a long established fact that a reader will be distracted by the
          readable page when looking at
        </Text>
        <TouchableOpacity
          onPress={() => navigation.push('Restaurant')}
          style={{
            backgroundColor: StyleGuide.colors.white,
            width: wp(92),
            paddingVertical: hp(2.2),
            borderRadius: 20,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: StyleGuide.colors.black,
              fontFamily: 'Poppins-Bold',
              fontSize: hp(2),
            }}>
            Explore Now
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
