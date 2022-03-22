import {Colors, Fonts} from '../../commons';
import React from 'react';
import { View } from 'react-native';
import { LinearProgress as RNELinearProgress } from 'react-native-elements';

export const LinearLoader = ({
 data = [{

 }, {

 }]
} : {
  data?: any;
}) => {
  return (
    <View>
      {
        data.map(({item, index}) => (
          <View
            key={index}
            style={{
              marginTop: Fonts.h(10),
              marginBottom: Fonts.h(5)
            }}
          >
            <RNELinearProgress style={{height: Fonts.h(10), marginVertical: Fonts.h(5), borderRadius: Fonts.h(10)}} color={Colors.colorWhite} />   
            <RNELinearProgress style={{height: Fonts.h(10), marginVertical: Fonts.h(5), borderRadius: Fonts.h(10)}} color={Colors.colorWhite} />   
            <RNELinearProgress style={{height: Fonts.h(10), marginVertical: Fonts.h(5), borderRadius: Fonts.h(10)}} color={Colors.colorWhite} />   
          </View> 
        ))
      }
    </View>
  )
};

