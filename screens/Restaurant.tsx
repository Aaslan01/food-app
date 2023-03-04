import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../data/StyleGuide';
import categories from '../data/Restaurant/DATA';

const Restaurant = () => {
  const [category, setCategory] = useState(1);
  console.log('====================================');
  console.log(categories[0]);
  console.log('====================================');
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: wp(4),
        backgroundColor: StyleGuide.colors.white,
      }}>
      <SafeAreaView
        style={{
          paddingTop: wp(4),
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
        <View
          style={{
            marginVertical: hp(4),
            paddingHorizontal: wp(2),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {categories.map((item, index) => (
            <TouchableOpacity onPress={() => setCategory(item.id)}>
              <Text
                style={[
                  StyleGuide.FoodCategories,
                  {
                    color:
                      category == item.id
                        ? StyleGuide.colors.black
                        : StyleGuide.colors.gray,
                  },
                ]}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>{/* {categories[0]} */}</View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Restaurant;
