import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Pressable, Image, RefreshControl, Text } from 'react-native';
import { Icon as RNEIcon, Button as RNEButton } from 'react-native-elements';
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
          {/* <Pressable
          >
            <Image source={require('../../assets/images/avatar.png')} />
          </Pressable> */}
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
        <View style={[styles.section, {
          flexDirection: 'row',
          justifyContent: "flex-end"
        }]}>
          <RNEButton
            title={`Add a Property`}
            onPress={() => navigation.navigate("CreatePropertyScreen")}
            buttonStyle={{
              backgroundColor: Colors.colorThree
            }}
            titleStyle={{
              fontSize: Fonts.h(13)
            }}
          />
          <RNEButton
            title={`Add Tenancy`}
            buttonStyle={{
              backgroundColor: Colors.colorOne
            }}
            titleStyle={{
              fontSize: Fonts.h(13)
            }}
            containerStyle={{
              marginLeft: Fonts.w(10)
            }}
          />
        </View>
        <View style={styles.section}>
          <View style={styles.labelView}>
            <Text style={styles.labels}>
              Landlord
            </Text>
          </View>
          <GridCard items={[{
            label: 'Properties',
            value: 50,
            icon: 'home-outline',
            iconcolor: Colors.colorOne,
            navigation: navigation,
            route: 'UserPropertiesScreen'
          }, {
            label: 'Tenants',
            value: 0,
            icon: 'home-outline',
            iconcolor: Colors.colorOne,
            route: 'DocumentsScreen'
          }]} navigation={navigation}/>
          <GridCard items={[{
            label: 'Agents',
            value: 50,
            icon: 'shield-outline',
            iconcolor: Colors.colorOne,
            route: 'PurchaseOrdersScreen'
          }, {
            label: 'Cash\nBalance',
            value: 50,
            icon: 'cash-outline',
            iconcolor: Colors.colorOne,
            route: 'PurchaseOrdersScreen'
          }]} navigation={navigation}/>
        </View>
        <View style={styles.section}>
          <View style={styles.labelView}>
            <Text style={styles.labels}>
              Tenant
            </Text>
          </View>
          <GridCard items={[{
            label: 'Tenancies',
            value: 50,
            icon: 'home-outline',
            iconcolor: Colors.colorOne,
            route: 'PurchaseOrdersScreen'
          }, {
            label: 'Payment\nHistory',
            value: 0,
            icon: 'cash-outline',
            iconcolor: Colors.colorTwo,
            route: 'DocumentsScreen'
          }]} navigation={navigation}/>
          <GridCard items={[{
            label: 'Pending\nRent',
            value: 50,
            icon: 'time-outline',
            iconcolor: Colors.colorRating,
            route: 'PurchaseOrdersScreen'
          }, {
            label: 'Overdue\nRent',
            value: 50,
            icon: 'calendar-outline',
            iconcolor: Colors.colorPink,
            route: 'PurchaseOrdersScreen'
          }]} navigation={navigation}/>
        </View>
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
  section: {
    borderRadius: Fonts.h(4),
    paddingVertical: Fonts.h(15),
    paddingHorizontal: Fonts.w(10),
    backgroundColor: Colors.colorWhite,
    marginBottom: Fonts.h(20)
  },
  labelView: {

  },
  labels: {
    color: Colors.colorBlack,
    fontFamily: Fonts.AverageSans_Regular,
    fontSize: Fonts.h(16)
  }
});

export default DashboardScreen;
