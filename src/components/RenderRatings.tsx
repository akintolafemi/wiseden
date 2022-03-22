import React, {FunctionComponent, useEffect, useState} from 'react';
import { View } from 'react-native';
import {Icon as RNEIcon} from 'react-native-elements';
import { Fonts, Colors } from '../commons';

const RenderRatings = ({
  totalStars = 3,
  colorOne = Colors.colorRating,
  colorTwo = Colors.colorRatingEmpty,
  size = Fonts.h(20),
  margin = Fonts.w(3)
}: {
  colorOne?: string;
  colorTwo?: string;
  size?: number;
  margin?: number;
  totalStars?: number
}) => {
  const x = totalStars;
  const j = 5 - x;
  let stars = [];
  let i: number;
  let k: number;

  for (i = 0; i < x; i++) {
    stars.push(
      <RNEIcon key={i} name="star" type='ionicon' color={colorOne} size={size} iconStyle={{marginRight: margin}} tvParallaxProperties />
    );
  }
  for (k = 0; k < j; k++) {
    i++;
    stars.push(
      <RNEIcon key={i} name="star" type='ionicon' color={colorTwo} size={size} iconStyle={{marginRight: margin}} tvParallaxProperties />
    );
  }
  return (
    <View style={{flexDirection: 'row'}}>
      {stars}
    </View>
  )
};
export default RenderRatings;
