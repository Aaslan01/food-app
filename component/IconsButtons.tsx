import {Image, TouchableOpacity, ImageSourcePropType} from 'react-native';
import React from 'react';
import StyleGuide from '../data/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

interface Props {
    onPress: ()=>void
    address: ImageSourcePropType
}

const IconsButtons: React.FC<Props> = ({onPress, address}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        padding: 10,
        marginTop: hp(4),
        marginHorizontal: wp(4),
        backgroundColor: StyleGuide.colors.light,
        borderRadius: 20,
      }}>
      <Image
        style={{height: hp(2.5), width: hp(2.5)}}
        source={address}
      />
    </TouchableOpacity>
  );
};

export default IconsButtons;
