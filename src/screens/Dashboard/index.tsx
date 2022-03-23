import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Pressable, Image, RefreshControl } from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { DashboardTabParamList } from '../../../types';
import {Fonts, Colors, GlobalStyles} from '../../commons';


//components;
import GridCard from '../../components/Boxed/GridCard';
import Requests from '../../components/Boxed/Requests';

//data

type Props = DrawerScreenProps<DashboardTabParamList, 'DashboardScreen'>;
const DashboardScreen: FunctionComponent<Props> = ({navigation}) => {
  
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => 
        <Pressable onPress={navigation.openDrawer} style={{marginRight: Fonts.w(20)}}>
          <RNEIcon type='ionicon' name="menu" tvParallaxProperties />
        </Pressable>,
      headerRight: () => (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable
            onPress={() => navigation.navigate('NotificationsScreen')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <RNEIcon
              type="ionicon"
              name="notifications"
              size={25}
              color={Colors.colorDarkText}
              style={{ marginRight: 15 }}
              tvParallaxProperties
            />
          </Pressable>
          <Pressable
          >
            <Image source={require('../../assets/images/avatar.png')} />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => null}
          />
        }
      >
        <GridCard items={[{
          label: 'All\nProperties',
          value: 50,
          icon: 'home-outline',
          route: 'PurchaseOrdersScreen'
        }, {
          label: 'All\nTenancies',
          value: 0,
          icon: 'home-outline',
          route: 'DocumentsScreen'
        }]} navigation={navigation}/>
        <GridCard items={[{
          label: 'All\nTenants',
          value: 50,
          icon: 'people-outline',
          route: 'PurchaseOrdersScreen'
        }, {
          label: 'Payment\nHistory',
          value: 0,
          icon: 'wallet-outline',
          route: 'DocumentsScreen'
        }]} navigation={navigation}/>
        <GridCard items={[{
          label: 'All\nAgents',
          value: 50,
          icon: 'shield-outline',
          route: 'PurchaseOrdersScreen'
        }, {
          label: 'All\nRevenue',
          value: 50,
          icon: 'cash-outline',
          route: 'PurchaseOrdersScreen'
        }]} navigation={navigation}/>
        <GridCard items={[{
          label: 'Overdue\nInvoice',
          value: 0,
          icon: 'document-text-outline',
          route: 'DocumentsScreen'
        }, {
          label: 'Current\nInvoice',
          value: 0,
          icon: 'document-text-outline',
          route: 'DocumentsScreen'
        }]} navigation={navigation}/>
        <Requests
        contentContainerStyle={{
          marginTop: Fonts.h(20)
        }}
      />
      </ScrollView>
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

export default DashboardScreen;
