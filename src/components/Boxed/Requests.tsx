import {Colors, Fonts} from '../../commons';
import React from 'react';
import { Image, View, Text, TouchableOpacity, ViewStyle, FlatList, StyleProp } from 'react-native';
import { Icon as RNEIcon, Avatar as RNEAvatar, LinearProgress as RNELinearProgress } from 'react-native-elements';
import PrettyDate from '../../functions/PrettyDate';

import {LinearLoader} from './Loaders';


const Requests = ({
  navigation,
  loading = false,
  data = [
    {
      id: "0",
    },{
      id: "1",
    },{
      id: "2",
    }
  ],
  refreshing,
  contentContainerStyle
} : {
  navigation?: any;
  loading?: boolean;
  data?: any;
  refreshing?: any;
  contentContainerStyle?: StyleProp<ViewStyle>;
}) => {
  return (
    <FlatList 
      data={data}
      contentContainerStyle={contentContainerStyle}
      // refreshing={loading}
      // onRefresh={refreshing}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View
        >
          <Text
            style={{
              fontFamily: Fonts.AverageSans_Regular,
              fontSize: Fonts.h(22)
            }}
          >
            Requests
          </Text>
        </View>
      }
      renderItem={({ item }) => loading ? (
        <LinearLoader key={item.serial} />
      ) : (
        <TouchableOpacity onPress={() => null} key={item.id} style={{
        }}>
          {RequestItem(item)}
        </TouchableOpacity>
      ) }
    />
  )
};

export default Requests;

export const RequestItem = ({
  id = "0",
  avatar,
  name = 'Ayeni Oluwafemi',
  date = 'Apr 19, 20211',
  propertyname = 'Property B'
} : {
  id: string;
  avatar?: string;
  name?: string;
  date?: string;
  propertyname?: string;
}) => {

  return (
    <View key={id} style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: Fonts.h(10),
      backgroundColor: Colors.colorWhite,
      paddingHorizontal: Fonts.w(5),
      paddingVertical: Fonts.h(10),
      borderRadius: Fonts.h(10)
    }}>
      {
        avatar ? (
          <RNEAvatar
            source={{uri: `https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg`}}
            rounded
            size={Fonts.h(50)}
          />
        ) : (
          <RNEAvatar
            icon={{name: 'person'}}
            rounded
            size={Fonts.h(50)}
            containerStyle={{
              backgroundColor: Colors.colorTwoOpaq
            }}
          />
        )
      }
      <View
        style={{
          flex: 1,
          marginLeft: Fonts.w(10)
        }}
      >
        <View
          style={{
            
          }}
        > 
          <Text
            style={{
              fontFamily: Fonts.AverageSans_Regular,
              fontSize: Fonts.h(16),
              color: Colors.colorBlack
            }}
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        > 
          <Text
            style={{
              fontFamily: Fonts.AverageSans_Regular,
              fontSize: Fonts.h(14),
              color: Colors.colorBlack
            }}
          >
            {propertyname}
          </Text>
          <Text
            style={{
              fontFamily: Fonts.AverageSans_Regular,
              fontSize: Fonts.h(14),
              color: Colors.colorDarkText
            }}
          >
            {date}
          </Text>
        </View>
      </View>
    </View>
  )
}
