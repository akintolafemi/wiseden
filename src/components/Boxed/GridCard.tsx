import {Colors, Fonts} from '../../commons';
import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';

const GridCard = ({
  navigation,
  items = [{
    label: 'Purchase\nOrders',
    value: '12',
    icon: 'home-outline',
    route: '',
  },{
    label: 'Out for\nDelivery',
    icon: 'home-outline',
    iconX: 'list',
    route: '',
  }]
} : {
  items?: any;
  navigation?: any;
}) => {

  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{
        flex: 1,
      }}>
        {items[0] ? 
          (
            <View style={{
              height: Fonts.h(160),
              marginVertical: Fonts.h(15),
              marginRight: Fonts.w(10),
              shadowOffset: {
                width: Fonts.w(1),
                height: Fonts.h(-2)
              },
              shadowOpacity: Fonts.h(0.25),
              shadowRadius: Fonts.h(12),
              shadowColor: Colors.colorBlack,
              backgroundColor: Colors.colorWhite,
              borderRadius: Fonts.h(10)
            }}>
              <TouchableOpacity onPress={() => navigation.navigate(`${items[0].route}`)}>
                <View
                  style={{
                    height: Fonts.h(80),
                    borderTopLeftRadius: Fonts.w(10),
                    borderTopRightRadius: Fonts.w(10),
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <RNEIcon name={items[0].icon} type='ionicon' color={Colors.colorDarkText} size={Fonts.h(40)} tvParallaxProperties/>
                </View>
                <View
                  style={{
                    height: Fonts.h(80),
                    backgroundColor: Colors.colorWhite,
                    borderBottomLeftRadius: Fonts.w(6),
                    borderBottomRightRadius: Fonts.w(6),
                    paddingHorizontal: Fonts.w(10),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Text style={{
                    color: Colors.colorBlack,
                    fontSize: Fonts.h(14),
                    fontFamily: Fonts.AverageSans_Regular,
                    lineHeight: Fonts.h(18),
                    flex: 1
                  }}>
                    {items[0].label}
                  </Text>
                  <Text style={{
                    color: Colors.colorBlack,
                    fontSize: Fonts.h(22),
                    fontFamily: Fonts.AverageSans_Regular,
                    flex: 1,
                    textAlign: 'right'
                  }}>
                    {items[0].value}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null
        }     
      </View>
      <View style={{flex: 1}}>
        {items[1] ? 
          (
            <View style={{
              height: Fonts.h(160),
              marginVertical: Fonts.h(15),
              marginRight: Fonts.w(10),
              shadowOffset: {
                width: Fonts.w(1),
                height: Fonts.h(-2)
              },
              shadowOpacity: Fonts.h(0.25),
              shadowRadius: Fonts.h(12),
              shadowColor: Colors.colorBlack,
              backgroundColor: Colors.colorWhite,
              borderRadius: Fonts.h(10)
            }}>
              <TouchableOpacity onPress={() => navigation.navigate(`${items[0].route}`)}>
                <View
                  style={{
                    height: Fonts.h(80),
                    borderTopLeftRadius: Fonts.w(10),
                    borderTopRightRadius: Fonts.w(10),
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <RNEIcon name={items[1].icon} type='ionicon' color={Colors.colorDarkText} size={Fonts.h(40)} tvParallaxProperties/>
                </View>
                <View
                  style={{
                    height: Fonts.h(80),
                    backgroundColor: Colors.colorWhite,
                    borderBottomLeftRadius: Fonts.w(6),
                    borderBottomRightRadius: Fonts.w(6),
                    paddingHorizontal: Fonts.w(10),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Text style={{
                    color: Colors.colorBlack,
                    fontSize: Fonts.h(14),
                    fontFamily: Fonts.AverageSans_Regular,
                    lineHeight: Fonts.h(18),
                    flex: 1
                  }}>
                    {items[1].label}
                  </Text>
                  <Text style={{
                    color: Colors.colorBlack,
                    fontSize: Fonts.h(22),
                    fontFamily: Fonts.AverageSans_Regular,
                    flex: 1,
                    textAlign: 'right'
                  }}>
                    {items[1].value}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : null
        }
      </View>
    </View>
  )
}

export default GridCard;
