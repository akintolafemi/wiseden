import {Colors, Fonts} from '../../commons';
import React from 'react';
import { Image, View, Text, StyleProp, ViewStyle } from 'react-native';
import RenderRatings from '../RenderRatings';

const StackleRatings = ({
  label = 'Stackle\'s Rating',
  count = 3,
} : {
  label?: string;
  count?: number;
}) => {

  return (
    <View style={{
      height: Fonts.h(90),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.colorTwo,
      borderRadius: Fonts.h(4)
    }}>
      <RenderRatings size={Fonts.h(25)} />
      <Text
        style={{
          color: Colors.colorWhite,
          fontFamily: 'Poppins-Regular',
          fontSize: Fonts.h(12),
          lineHeight: Fonts.h(18),
          marginTop: Fonts.h(12)
        }}
      >{label}</Text>
      <Image 
        source={require('../../assets/images/lottie.png')}
        style={{
          position: 'absolute',
          height: Fonts.h(80),
          width: Fonts.h(80),
          right: Fonts.w(-5),
          bottom: Fonts.h(-5)
        }}
      />
    </View>
  )
}

export default StackleRatings;
