import {Colors, Fonts} from '../../commons';
import React from 'react';
import { Image, View, Text, StyleProp, ViewStyle } from 'react-native';

const ModalLabel = ({
  label = 'Modal Label',
  subtext
} : {
  label?: string;
  subtext?: string;
}) => {

  return (
    <View style={{
      marginBottom: Fonts.h(30)
    }}>
      <Text style={{
        color: Colors.colorDarkText, 
        fontFamily: Fonts.Roboto_Black,
        fontSize: Fonts.h(26), 
        marginBottom: Fonts.h(5)}}>{label}</Text>
      {subtext ? (<Text style={{color: Colors.colorDarkText, fontWeight: "400", fontSize: Fonts.h(12), lineHeight: Fonts.h(18)}}>{subtext}</Text>) : null}
    </View>
  )
}

export default ModalLabel;
