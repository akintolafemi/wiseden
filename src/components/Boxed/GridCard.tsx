import {Colors, Fonts} from '../../commons';
import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';

const GridCard = ({
  navigation,
  items = [{
    label: 'Purchase\nOrders',
    value: '12',
    icon: require('../../assets/images/icons/purchase.png'),
    route: '',
  },{
    label: 'Out for\nDelivery',
    icon: require('../../assets/images/icons/delivery-truck.png'),
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
              height: Fonts.h(220),
              marginVertical: Fonts.h(15),
              marginRight: Fonts.w(10),
              shadowOffset: {
                width: Fonts.w(1),
                height: Fonts.h(-2)
              },
              shadowOpacity: Fonts.h(0.25),
              shadowRadius: Fonts.h(12),
              shadowColor: Colors.colorBlack
            }}>
              <TouchableOpacity onPress={() => navigation.navigate(`${items[0].route}`)}>
                <View
                  style={{
                    height: Fonts.h(120),
                    backgroundColor: items[0].invertBg ? Colors.colorPinkOpaq : Colors.colorTwoOpaq,
                    borderTopLeftRadius: Fonts.w(6),
                    borderTopRightRadius: Fonts.w(6),
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image source={items[0].icon} />
                </View>
                <View
                  style={{
                    height: Fonts.h(100),
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
                    fontFamily: 'Poppins-Regular',
                    lineHeight: Fonts.h(18)
                  }}>
                    {items[0].label}
                  </Text>
                  {items[0].value ? (
                    <Text style={{
                      color: Colors.colorTwo,
                      fontSize: Fonts.h(20),
                      fontFamily: 'Poppins-SemiBold',
                      marginTop: Fonts.h(10)
                    }}>
                      {items[0].value}
                    </Text>
                  ) : (
                    <RNEIcon name={items[0].iconX} type='ionicon' color={Colors.colorBlack} size={Fonts.h(25)} tvParallaxProperties />
                  )}
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
              height: Fonts.h(220),
              marginVertical: Fonts.h(15),
              marginLeft: Fonts.w(10),
              shadowOffset: {
                width: Fonts.w(1),
                height: Fonts.h(-2)
              },
              shadowOpacity: Fonts.h(0.25),
              shadowRadius: Fonts.h(12),
              shadowColor: Colors.colorBlack
            }}>
              <TouchableOpacity onPress={() => navigation.navigate(`${items[1].route}`)}>
                <View
                  style={{
                    height: Fonts.h(120),
                    backgroundColor: items[1].invertBg ? Colors.colorPinkOpaq : Colors.colorTwoOpaq,
                    borderTopLeftRadius: Fonts.w(6),
                    borderTopRightRadius: Fonts.w(6),
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image source={items[1].icon} />
                </View>
                <View
                  style={{
                    height: Fonts.h(100),
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
                    fontFamily: 'Poppins-Regular',
                    lineHeight: Fonts.h(18)
                  }}>
                    {items[1].label}
                  </Text>
                  {items[1].value ? (
                    <Text style={{
                      color: Colors.colorTwo,
                      fontSize: Fonts.h(20),
                      fontFamily: 'Poppins-SemiBold',
                      marginTop: Fonts.h(10)
                    }}>
                      {items[1].value}
                    </Text>
                  ) : (
                    <RNEIcon name={items[1].iconX} type='ionicon' color={Colors.colorBlack} size={Fonts.h(25)} tvParallaxProperties />
                  )}
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
