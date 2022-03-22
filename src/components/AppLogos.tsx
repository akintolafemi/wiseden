import {Colors, Fonts} from '../commons';
import React from 'react';
import { Image, View, Text, StyleProp, ViewStyle } from 'react-native';

export const AppLogoOne = ({
  withLabel = true,
  size = 'medium',
  containerStyle = {}
} : {
  withLabel?: boolean;
  size?: string;
  containerStyle?: StyleProp<ViewStyle>
}) => {
  let style = {
    img:{height: 80, width: 80},
    text:{fontSize: Fonts.w(25)}
  };
  switch (size) {
    case 'small': 
      style.img = {height: 60, width: 60};
      style.text=  {fontSize: Fonts.w(18)};
      break;
    case 'large': 
      style.img = {height: 120, width: 120};
      style.text = {fontSize: Fonts.w(35)};
      break;
    default: 
      break;
  }

  return (
    <View style={containerStyle}>
      <Image
        style={style.img}
        source={require('../assets/images/favicon.png')}
      />
      {withLabel ? (
        <View style={{flexDirection: 'row'}}>
          <Text style={[style.text, {color: Colors.colorWhite, fontWeight: "bold"}]}>wiseden</Text>
          <Text style={[style.text, {color: Colors.colorOne, fontWeight: "bold"}]}>.com</Text>
        </View>
      ) : null }
    </View>
  )
}
