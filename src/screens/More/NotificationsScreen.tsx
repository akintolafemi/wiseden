import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../types';
import {Fonts, Colors, GlobalStyles} from '../../commons';

import { API } from '../../network';

//components
import Notifications, {NotificationItem} from '../../components/Boxed/Notifications'

type Props = DrawerScreenProps<RootStackParamList, 'NotificationsScreen'>;
const NotificationsScreen: FunctionComponent<Props> = ({navigation}) => {

  const [notificationLoading, setNotificationsLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  async function getNotifications() {
    try {
      console.log("loading", notificationLoading);
      setNotificationsLoading(true);
      console.log("loading", notificationLoading);
      // const list = await API.getNotifications();
      const list = {status: "success", data: []};
      setNotificationsLoading(false);
      console.log("loading", notificationLoading);
      if (list.status === "success") 
        return list.data;
      else  
        return [];
    }
    catch (e) {
      setNotificationsLoading(false);
    }
  }

  useEffect(() => {
    navigation.addListener("focus", () => {
      getNotifications().then((list) => {
        setNotifications(list);
      });
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => null}
        style={{
          backgroundColor: Colors.colorTwoOpaq,
          borderRadius: Fonts.h(10),
          alignSelf: "flex-end",
          paddingVertical: Fonts.h(5),
          paddingHorizontal: Fonts.w(10)
        }}
      >
        <Text
          style={{
            fontFamily: Fonts.AverageSans_Regular,
            fontSize: Fonts.h(11),
          }}
        >Mark all as read</Text>
      </TouchableOpacity>
      <Notifications 
        loading={notificationLoading}
        data={notifications}
        refreshing={() => getNotifications()}
      />
      {/* <ScrollView>
        <NotificationItem status='unread' type='invoice' shortMessage='(15) New Invoice(s)' time={TimeAgo('Mon Apr 19 2021 13:04:46')}/>
        <NotificationItem status='read' type='bid' shortMessage='(15) New Bid(s)' time={TimeAgo('Mon Apr 19 2021 13:04:46')}/>
      </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GlobalStyles.paddingArround,
    paddingTop: Fonts.h(-30),
    paddingBottom: Fonts.h(20)
  },
});

export default NotificationsScreen;
