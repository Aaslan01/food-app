import {View, Text, ImageSourcePropType, Image} from 'react-native';
import React from 'react';
import StyleGuide from '../data/StyleGuide';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

interface Props {
  text: string;
  image: ImageSourcePropType;
}

const IconText: React.FC<Props> = ({text, image}) => {
  return (
    <View
      style={[
        StyleGuide.fcic,
        {backgroundColor: StyleGuide.colors.light, 
        paddingHorizontal: wp(3),
        paddingVertical: wp(2),
        borderRadius:14,
    },
      ]}>
      <Image style={{height: hp(3), width: hp(3), marginRight: wp(1)}} source={image} />
      <Text style={[StyleGuide.SecondHanding, {fontSize: hp(2)}]}>{text}</Text>
    </View>
  );
};

export default IconText;
