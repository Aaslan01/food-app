import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../data/StyleGuide';

const Restaurant = () => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          padding: wp(4),
          backgroundColor: StyleGuide.colors.white,
        }}>
        <View
          style={{
            marginTop: hp(2),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{height: hp(6), width: hp(6), borderRadius: 20}}
              source={require('../assets/restaurant/avatar.jpg')}
            />
            <Text
              style={{
                marginLeft: wp(5),
                color: StyleGuide.colors.black,
                fontSize: hp(2.2),
                fontFamily: 'Poppins-SemiBold',
              }}>
              Hi, Ali
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity>
              <Image
                style={StyleGuide.iconSize}
                source={require('../assets/icons/bell.png')}
              />
            </TouchableOpacity>
            <View style={{width: 10}} />
            <TouchableOpacity>
              <Image
                style={StyleGuide.iconSize}
                source={require('../assets/icons/menu.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[StyleGuide.SecondHanding, {width: wp(70), marginTop: hp(2)}]}>
          What would you like to order
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: StyleGuide.colors.light,
            alignItems: 'center',
            paddingHorizontal: wp(3),
            paddingVertical: wp(1.4),
            borderRadius:10
          }}>
          <Image
            style={StyleGuide.iconSize}
            source={require('../assets/icons/search.png')}
          />
          <TextInput
            placeholder="Want to .."
            placeholderTextColor={StyleGuide.colors.gray}
            style={{
               flex:1, padding: 10, color:StyleGuide.colors.black}}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Restaurant;
