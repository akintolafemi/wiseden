import {Colors, Fonts} from '../../commons';
import React from 'react';
import { Image, View, Text, TouchableOpacity, ViewStyle, FlatList } from 'react-native';
import { Icon as RNEIcon, LinearProgress as RNELinearProgress } from 'react-native-elements';
import PrettyDate from '../../functions/PrettyDate';

import {LinearLoader} from './Loaders';

const timeAgo = (date: string) => {
  let momentAgo = "";
  try {
    let currentDate = new Date();
    let dateAgo = new Date(PrettyDate(date));
    let years = currentDate.getFullYear() - dateAgo.getFullYear();
    let months = currentDate.getMonth() - dateAgo.getMonth();
    let days = currentDate.getDay() - dateAgo.getDay();
    let hours = currentDate.getHours() - dateAgo.getHours();
    let minutes = currentDate.getMinutes() - dateAgo.getMinutes();
    let seconds = currentDate.getSeconds() - dateAgo.getSeconds();

    if (dateAgo > currentDate)
      momentAgo = "Date error";
    else {
      if (years > 0)
      momentAgo = years + " years ago";
      else if (months > 0)
      momentAgo = months + " months ago";
      else if (days > 0)
      momentAgo = days + " days ago";
      else if (days < 0)
      momentAgo = "a month ago";
      else if (hours > 0)
      momentAgo = hours + " hours ago";
      else if (minutes > 0)
      momentAgo = minutes + " minutes ago";
      else if (seconds > 0)
      momentAgo = seconds + " seconds ago";
    }
    return momentAgo;
  } catch (error) {
    console.log(error.message);
    return "Date error"
  }
}

const renderIconForType = (type: string) => {
  switch (type.toLocaleLowerCase()) {
    case 'approval':
      return require('../../assets/images/icons/purchase.png');
    case 'bid':
      return require('../../assets/images/icons/bid.png');
    case 'vendor onboard':
      return require('../../assets/images/icons/hand-shake.png');
    case 'delivery':
      return require('../../assets/images/icons/check.png');
    default:
      return require('../../assets/images/icons/bill.png');
  }
}

const Notifications = ({
  navigation,
  loading = false,
  data = [
    {
      id: "0",
      read_status: 'unread',
      type: 'bid',
      created_at: 'Mon Apr 19 2021 13:04:46',
      content: '(15) New Invoice(s)'
    },{
      id: "1",
      read_status: 'read',
      type: 'invoice',
      created_at: 'Mon Apr 19 2021 13:04:46',
      content: '(15) New Invoice(s)'
    },{
      id: "2",
      read_status: 'read',
      type: 'invoice',
      created_at: 'Mon Apr 19 2021 13:04:46',
      content: '(15) New Invoice(s)'
    }
  ],
  refreshing,
} : {
  navigation?: any;
  loading?: boolean;
  data?: any;
  refreshing?: any;
}) => {
  return (
    <FlatList 
      data={data}
      refreshing={loading}
      onRefresh={refreshing}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => loading ? (
        <LinearLoader />
      ) : (
        <TouchableOpacity onPress={() => null} key={item.serial} style={{
        }}>
          {NotificationItem(item)}
        </TouchableOpacity>
      ) }
    />
  )
};

export default Notifications;

export const NotificationItem = ({
  id = "0",
  read_status = 'read',
  notification_type = 'negotiation',
  created_at = '',
  content = 'Delivery Confirmation'
} : {
  id: string;
  read_status: string;
  notification_type: string;
  created_at: string;
  content: string;
}) => {

  return (
    <View key={id} style={{
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      {
        read_status === 'read' ? (
          <RNEIcon type='ionicon' name='ellipse-outline' color={Colors.colorTwo} size={Fonts.h(12)} tvParallaxProperties />
        ) : (
          <RNEIcon type='ionicon' name='ellipse' color={Colors.colorTwo} size={Fonts.h(12)} tvParallaxProperties />
        )
      }
      <View style={{
        flex: 1,
        marginLeft: Fonts.w(6),
        marginVertical: Fonts.h(10),
        backgroundColor: Colors.colorWhite,
        shadowOffset: {
          width: Fonts.w(1),
          height: Fonts.h(-2)
        },
        shadowOpacity: Fonts.h(0.25),
        shadowRadius: Fonts.h(12),
        shadowColor: Colors.colorBlack,
        borderRadius: Fonts.h(10),
        paddingHorizontal: Fonts.w(10),
        paddingVertical: Fonts.h(14)
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <View style={{
            height: Fonts.h(45),
            width: Fonts.h(45),
            borderRadius: Fonts.h(50),
            backgroundColor: Colors.colorTwoOpaq,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={renderIconForType(notification_type)} style={{height: Fonts.h(20), width: Fonts.h(20)}} />
          </View>
          <Text style={{
            flex: 1,
            fontFamily: Fonts.AverageSans_Regular,
            fontSize: Fonts.h(14),
            marginLeft: Fonts.w(10),
            marginBottom: Fonts.h(5)
          }}>
            {content.substring(0, 50)}
          </Text>
        </View>
        <View style={{
          marginLeft: Fonts.w(50),
          marginTop: Fonts.h(-5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <TouchableOpacity
            onPress={() => null}
            style={{
              backgroundColor: Colors.colorTwoOpaq,
              borderRadius: Fonts.h(10),
              paddingHorizontal: Fonts.w(10),
              paddingVertical: Fonts.h(2)
            }}
          >
            <Text
              style={{
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(10),
              }}
            >View</Text>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <Image source={require('../../assets/images/icons/clock.png')} style={{width: Fonts.h(10), height: Fonts.h(10)}}/>
            <Text
              style={{
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(10),
                marginLeft: Fonts.w(5)
              }}
            >
              {timeAgo(created_at)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
