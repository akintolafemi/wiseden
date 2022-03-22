/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { FunctionComponent } from 'react';
import { BottomTabScreenProps, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator, MaterialBottomTabNavigationOptions } from '@react-navigation/material-bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerNavigationOptions, DrawerScreenProps } from '@react-navigation/drawer';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  LoginScreen: undefined;
  LandingScreen: undefined;
  SetupScreen: undefined;
  DrawerTabNavigator: NavigatorScreenParams<DrawerTabParamList> | undefined;
  NotificationsScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  DashboardTabNavigator: NavigatorScreenParams<DashboardTabParamList> | undefined;
  MessageTabNavigator: NavigatorScreenParams<MessageTabParamList> | undefined;
  TabContract: undefined;
  TabCatalogue: undefined;
  TabBids: undefined;
  TabInvoice: undefined;
};

export type RootTabScreenProps<Screen extends keyof DrawerTabParamList> = CompositeScreenProps<
  DrawerScreenProps<DrawerTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type DrawerRenderProps = {
  name: keyof DrawerTabParamList;
  component: FunctionComponent<any>;
  options: DrawerNavigationOptions;
  initialParams: any;
}

export type DrawerTabParamList = {
  Dashboard: undefined;
  Landlord: undefined;
  Tenants: undefined;
  Agent: undefined;
  Settings: undefined;
  Account: undefined;
  PaymentHistory: undefined;
}

export type DashboardTabParamList = {
  DashboardScreen: undefined;
  DocumentsScreen: undefined;
  NotificationsScreen: undefined;
}

export type MessageTabParamList = {

}

export type TabsRenderProps = {
  name: keyof RootTabParamList;
  component: FunctionComponent<any>;
  options: BottomTabNavigationOptions;
  initialParams?: any;
  key: string;
};