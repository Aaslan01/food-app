import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from 'react-native-responsive-screen';
import StyleGuide from '../data/StyleGuide';
import categories from '../data/Restaurant/DATA';
import { useNavigation } from '@react-navigation/native';

const FoodCategories = () => {
    const navigation = useNavigation()
    const [category, setCategory] = useState(0);
  return (
    <View>
      <View
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
      </View>
    </View>
  );
};

export default FoodCategories;
