import {Colors, Fonts} from '../../commons';
import React from 'react';
import { Image, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

const LogoTitle = ({
  titleStyle,
  containerStyle,
} : {
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}) => {

  return (
    <View style={[{
    }, containerStyle]}>
      <Text
        style={[{
          color: Colors.colorWhite,
          fontFamily: Fonts.Stanley,
          fontSize: Fonts.h(70),
        }, titleStyle]}
      >
        Wiseden
      </Text>
    </View>
  )
}

export default LogoTitle;
