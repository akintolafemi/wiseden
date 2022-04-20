import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, Alert, Image, Text, TouchableOpacity} from 'react-native';
import { Icon as RNEIcon, Avatar as RNEAvatar } from 'react-native-elements';
import {DrawerActions} from '@react-navigation/native';
import { Colors, Fonts, SharedPref } from '../commons';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import useColorScheme from '../hooks/useColorScheme';

import { DrawerRouteNavigations } from '../constants/routes';

import { DrawerTabParamList, DrawerRenderProps } from '../../types';

const Drawer = createDrawerNavigator<DrawerTabParamList>();
//const Drawer = createDrawerNavigator();


export function renderScreen({
  name,
  component,
  options = {},
  initialParams = {}
}: DrawerRenderProps) {
  return (
    <Drawer.Screen
      name={name}
      key={name}
      component={component}
      options={options}
      initialParams={initialParams}
    />
  );
}

// drawerContent={(props) => <CustomDrawerContent {...props}/>}

const DrawerNavigation: FunctionComponent<DrawerRenderProps> = () => {

  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Dashboard"
      backBehavior="history"
      // drawerType="slide"
      screenOptions={{
        drawerStyle: {backgroundColor: Colors.colorOne, shadowColor: Colors.colorhadowColor, width: Fonts.w(250)},
        drawerItemStyle: {marginHorizontal: Fonts.h(0), marginBottom: Fonts.h(0), paddingHorizontal: Fonts.w(10), borderBottomColor: Colors.colorWhite, borderBottomWidth: Fonts.h(1)},
        drawerLabelStyle: {marginLeft: Fonts.w(-15)},
        drawerActiveTintColor: Colors.colorWhite,
        // drawerInactiveBackgroundColor: Colors.primary,
        drawerInactiveTintColor: Colors.colorInactiveDrawerText,
      }}
    >
      {DrawerRouteNavigations.map((route) => {
        return renderScreen(route);
      })}
    </Drawer.Navigator>
  );
};

export const navigationRef: any = React.createRef();

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

function CustomDrawerContent(props: any) {

  const colorScheme = useColorScheme();

  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  // const translateX = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-100, 0],
  // });
  const [username, setUsername] = useState<any>("Donyard"); 

  useEffect(() => {

    
  }, []);

  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={[animatedStyles]}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Fonts.w(20)}}>
          <Image source={require('../assets/images/favicon.png')} style={{width: Fonts.w(37), height: Fonts.h(40)}} />
          <RNEIcon onPress={() => props.navigation.closeDrawer()} type='ionicon' name='close' tvParallaxProperties size={Fonts.h(40)} color={Colors.colorWhite} />
        </View>
        <View style={{
          alignItems: 'center',
          paddingTop: Fonts.h(30),
          paddingBottom: Fonts.h(20)
        }}>
          <RNEAvatar
            source={{uri: `https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg`}}
            rounded
            size={Fonts.h(130)}
            containerStyle={{
              borderWidth: Fonts.h(3),
              borderColor: Colors.colorWhite
            }}
          />
          <Text style={{
            fontFamily: Fonts.AverageSans_Regular,
            color: Colors.colorWhite,
            fontSize: Fonts.h(20),
            marginTop: Fonts.h(15)
          }}>
            Paul Peter
          </Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          icon={({focused}) => (
            <RNEIcon name="log-out" type='ionicon' iconStyle={{fontSize: Fonts.h(20), color: focused ? Colors.colorWhite : Colors.colorInactiveDrawerText}} tvParallaxProperties />
          )}
          style={{paddingVertical: Fonts.h(0), marginBottom: Fonts.h(0)}}
          labelStyle={{marginLeft: Fonts.w(-15)}}
          activeTintColor={Colors.colorWhite}
          // inactiveBackgroundColor={Colors.primary}
          inactiveTintColor={Colors.colorInactiveDrawerText}
          onPress={() => {
            SharedPref.clearUserData();
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'LandingHomeScreen' }],
            });
          }}
        />
      </Animated.View>
    </DrawerContentScrollView>
  );
}

export default DrawerNavigation;
