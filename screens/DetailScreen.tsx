import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../data/StyleGuide';
import IconsButtons from '../component/IconsButtons';
import {useNavigation} from '@react-navigation/native';
import IconText from '../component/IconText';
import FullButton from '../component/FullButton';
const DetailScreen = () => {
  const navigation = useNavigation();
  const params = useRoute().params as any;
  return (
    <View>
      {/* Background Image with buttons */}
      <ImageBackground
        style={{
          height: hp(38),
          width: wp(100),
        }}
        source={params.item.image}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <IconsButtons
            onPress={() => navigation.goBack()}
            address={require('../assets/icons/left-arrow.png')}
          />
          <IconsButtons
            onPress={() => null}
            address={require('../assets/icons/share.png')}
          />
        </View>
      </ImageBackground>
      {/* white part */}
      <View
        style={{
          marginTop: hp(-2),
          height: hp(64),
          width: wp(100),
          backgroundColor: StyleGuide.colors.white,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingHorizontal: wp(4),
          paddingBottom: hp(4),
          paddingTop: hp(1),
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}>
          {/* Name and rating */}
          <View
            style={[
              StyleGuide.fcic,
              {
                marginTop: hp(4),
                justifyContent: 'space-between',
              },
            ]}>
            <Text
              numberOfLines={1}
              style={[StyleGuide.SecondHanding, {width: wp(74)}]}>
              {params.item.name}
            </Text>
            <View
              style={[
                StyleGuide.fcic,
                {
                  backgroundColor: StyleGuide.colors.yellow,
                  paddingHorizontal: wp(2),
                  borderRadius: 4,
                },
              ]}>
              <Image
                style={{height: wp(4), width: wp(4)}}
                source={require('../assets/icons/star.png')}
              />
              <Text style={[StyleGuide.FoodDescription, {alignSelf: 'center'}]}>
                {' '}
                {params.item.rating}
              </Text>
            </View>
          </View>
          {/* Times */}
          <View
            style={[
              StyleGuide.fcic,
              {justifyContent: 'space-between', marginHorizontal: wp(2)},
            ]}>
            <IconText
              image={require('../assets/icons/clock.png')}
              text={params.item.cooking_time}
            />
            <IconText
              image={require('../assets/icons/scooter.png')}
              text={params.item.del_time}
            />
            <IconText
              image={require('../assets/icons/dining-room.png')}
              text={params.item.time}
            />
          </View>
          {/* ingredients */}
          <Text
            style={[
              StyleGuide.SecondHanding,
              {fontSize: hp(3), marginTop: hp(4)},
            ]}>
            Ingredients
          </Text>
          <View>
            {params.item.ingredients.map((ingredient: [], index: number) => (
              <View style={StyleGuide.fcic}>
                <View
                  style={{
                    backgroundColor: StyleGuide.colors.gray,
                    height: 8,
                    width: 8,
                    borderRadius: 20,
                    marginHorizontal: wp(2),
                  }}
                />
                <Text
                  style={[
                    StyleGuide.Ingredients,
                    {color: StyleGuide.colors.gray},
                  ]}>
                  {ingredient.title}
                </Text>
              </View>
            ))}
          </View>
          {/* Description */}
          <Text style={[StyleGuide.SecondHanding, {fontSize: hp(3)}]}>
            Description
          </Text>
          <Text
            style={[StyleGuide.Description, {color: StyleGuide.colors.gray}]}>
            {params.item.description}
          </Text>
        </ScrollView>
        {/* Order Button */}
        <FullButton
          text={'Chose this for '}
          price={params.item.price}
          textColor={StyleGuide.colors.white}
          backgroundColor={StyleGuide.colors.black}
        />
      </View>
    </View>
  );
};

export default DetailScreen;
