import {FunctionComponent} from 'react';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { DrawerRenderProps, RootStackParamList, DashboardTabParamList } from 'types';
import { Fonts } from '../commons';
import { Icon as RNEIcon } from 'react-native-elements';

//screens
import LandingScreen from '../screens/Landing/LandingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SetupScreen from '../screens/Auth/SetupScreen';
import DrawerNavigation from '../navigation/DrawerNavigator';
import NotificationsScreen from '../screens/More/NotificationsScreen';
import { BottomTabNavigator } from '../navigation';

//dashboard screens
import DashboardScreen from '../screens/Dashboard';




export type RenderProps = {
  name: keyof RootStackParamList;
  component: FunctionComponent<any>;
  options: NativeStackNavigationOptions;
  initialParams: any;
};

export type DashboardRenderProps = {
  name: keyof DashboardTabParamList;
  component: FunctionComponent<any>;
  options: NativeStackNavigationOptions;
  initialParams: any;
}


export const RootRoutes: Array<RenderProps> = [
  {
    name: 'LandingScreen',
    component: LandingScreen,
    options: {
      headerShown: false
    },
    initialParams: {}
  },{
    name: 'LoginScreen',
    component: LoginScreen,
    options: {
      headerShown: false
    },
    initialParams: {}
  },{
    name: 'SetupScreen',
    component: SetupScreen,
    options: {
      headerShown: false
    },
    initialParams: {}
  },{
    name: 'DrawerTabNavigator',
    component: DrawerNavigation,
    options: {
      headerShown: false
    },
    initialParams: {}
  },{
    name: 'NotificationsScreen',
    component: NotificationsScreen,
    options: {
      headerShown: true,
      title: 'Notifications'
    },
    initialParams: {}
  }
];

export const DrawerRouteNavigations: Array<DrawerRenderProps> = [ 
  {
    name: 'Dashboard',
    component: BottomTabNavigator,
    options: {
      headerShown: false,
      gestureEnabled: false,
      drawerLabel: 'Dashboard',
      drawerIcon: ({focused, color}) => (
        <RNEIcon name="grid" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />
      )
    },
    initialParams: {}
  },{
    name: 'Landlord',
    component: BottomTabNavigator,
    options: {
      headerShown: false,
      gestureEnabled: false,
      drawerLabel: 'Landlord',
      drawerIcon: ({focused, color}) => (
        <RNEIcon name="man" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />
      )
    },
    initialParams: {}
  },{
    name: 'Tenants',
    component: BottomTabNavigator,
    options: {
      headerShown: false,
      gestureEnabled: false,
      drawerLabel: 'Tenants',
      drawerIcon: ({focused, color}) => (
        <RNEIcon name="people" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />
      )
    },
    initialParams: {}
  },{
    name: 'Agent',
    component: BottomTabNavigator,
    options: {
      headerShown: false,
      gestureEnabled: false,
      drawerLabel: 'Agent',
      drawerIcon: ({focused, color}) => (
        <RNEIcon name="shield" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />
      )
    },
    initialParams: {}
  },{
    name: 'Settings',
    component: BottomTabNavigator,
    options: {
      headerShown: false,
      gestureEnabled: false,
      drawerLabel: 'Settings',
      drawerIcon: ({focused, color}) => (
        <RNEIcon name="settings" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />
      )
    },
    initialParams: {}
  },{
    name: 'Account',
    component: BottomTabNavigator,
    options: {
      headerShown: false,
      gestureEnabled: false,
      drawerLabel: 'Account',
      drawerIcon: ({focused, color}) => (
        <RNEIcon name="person" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />
      )
    },
    initialParams: {}
  },{
    name: 'PaymentHistory',
    component: BottomTabNavigator,
    options: {
      headerShown: false,
      gestureEnabled: false,
      drawerLabel: 'Payment History',
      drawerIcon: ({focused, color}) => (
        <RNEIcon name="wallet" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />
      )
    },
    initialParams: {}
  }
];

export const DashboardTabRoutes: Array<DashboardRenderProps> = [
  {
    name: 'DashboardScreen',
    component: DashboardScreen,
    options: {
      headerShown: true,
      title: 'Dashboard',
    },
    initialParams: {}
  }
];
