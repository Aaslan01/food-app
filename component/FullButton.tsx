import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import StyleGuide from '../data/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface Props {
  text: string;
  price?: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
}

const FullButton: React.FC<Props> = ({
  text,
  onPress,
  backgroundColor,
  price,
  textColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: backgroundColor ?? StyleGuide.colors.white,
        width: wp(92),
        paddingVertical: hp(2.2),
        borderRadius: 20,
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: textColor ?? StyleGuide.colors.black,
          fontFamily: 'Poppins-Bold',
          fontSize: hp(2),
        }}>
        {text}
        {price && (
          <Text
            style={{
              color: StyleGuide.colors.yellow,
            }}>
            ${price}
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default FullButton;
