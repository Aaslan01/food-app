import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const StyleGuide = {
  colors: {
    black: '#000',
    dark: 'rgb(70,70,70)',
    yellow: 'rgb(250,230,50)',
    gray: 'rgb(120,120,120)',
    light: 'rgb(240,240,240)',
    white: '#fff',
  },
  iconSize: {height: hp(4), width: hp(4)},
  OpeningHanding: {
    color: '#fff',
    fontSize: hp(4.8),
    fontFamily: 'Poppins-Bold',
  },
  SecondHanding: {
    color: '#000',
    fontSize: hp(3.8),
    fontFamily: 'Poppins-Bold',
  },
  FoodCategories: {
    color: '#000',
    fontSize: hp(2),
    fontFamily: 'Poppins-Bold',
  },
  FoodDescription: {
    color: '#000',
    fontSize: hp(2.1),
    fontFamily: 'Poppins-Bold',
  },
};

export default StyleGuide;
