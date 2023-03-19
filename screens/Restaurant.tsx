import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../data/StyleGuide';
import categories from '../data/Restaurant/DATA';
import {useNavigation} from '@react-navigation/native';
import FoodCategories from '../component/FoodCategories';
const Restaurant = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState(0);
  return (
    <SafeAreaView
      style={{
        // paddingHorizontal: wp(4),
        backgroundColor: StyleGuide.colors.white,
      }}>
      <View
        style={{
          marginTop: Platform.OS == 'android' ? hp(2) : 0,
          paddingBottom: hp(0.2),
          borderBottomWidth: 1,
          borderBottomColor: StyleGuide.colors.light,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: wp(4),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{height: hp(6), width: hp(6), borderRadius: 50}}
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: wp(4),
        }}>
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
            borderRadius: 10,
          }}>
          <Image
            style={StyleGuide.iconSize}
            source={require('../assets/icons/search.png')}
          />
          <TextInput
            placeholder="Want to .."
            placeholderTextColor={StyleGuide.colors.gray}
            style={{
              flex: 1,
              padding: 10,
              color: StyleGuide.colors.black,
            }}
          />
        </View>
        <FoodCategories />
        {/* <View
          style={{
            marginVertical: hp(4),
            paddingHorizontal: wp(2),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {categories.map((item, index) => (
            <TouchableOpacity onPress={() => setCategory(index)}>
              <Text
                style={[
                  StyleGuide.FoodCategories,
                  {
                    color:
                      category == index
                        ? StyleGuide.colors.black
                        : StyleGuide.colors.gray,
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingBottom: hp(2),
          }}>
          {categories[category].recipes.map((item: any, index: number) => (
            <TouchableOpacity
              onPress={() =>
                navigation.push('DetailScreen', {
                  item: item,
                })
              }
              style={{
                width: wp(44),
              }}>
              <Image
                style={{
                  height: hp(30),
                  width: wp(44),
                  borderRadius: 20,
                  resizeMode: 'cover',
                }}
                source={item.image}
              />
              <Text style={StyleGuide.FoodDescription}>{item.name}</Text>
              <Text
                style={[
                  StyleGuide.FoodDescription,
                  {
                    color: StyleGuide.colors.gray,
                    fontFamily: 'Poppins-Regular',
                    fontSize: hp(1.8),
                  },
                ]}>
                Today Discount {item.discount}
              </Text>
              <Text style={StyleGuide.FoodDescription}>${item.price}</Text>
            </TouchableOpacity>
          ))}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
