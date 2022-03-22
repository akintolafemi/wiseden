/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, View } from 'react-native';

import {Colors, Fonts} from '../commons';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList, TabsRenderProps } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { useEffect, useState } from 'react';
import { DashboardRenderProps, DashboardTabRoutes, RenderProps, RootRoutes } from '../constants/routes';
import { Icon as RNEIcon } from 'react-native-elements';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();


export function renderScreen({name, component, options = {}, initialParams = {}}: RenderProps) {
  return (
    <Stack.Screen
      name={name}
      key={name}
      options={options}
      component={component}
      initialParams={initialParams}
    />
  );
}

export function renderDashboardScreen({name, component, options = {}, initialParams = {}}: DashboardRenderProps) {
  return (
    <InTabStack.Screen
      name={name}
      key={name}
      options={options}
      component={component}
      initialParams={initialParams}
    />
  );
}

function RootNavigator() {
  const [pageInitialPage, setPageInitialPage] = useState<number | undefined | null>(null);
  useEffect(() => {
    try {
      // AsyncStorage.getItem(INITIAL_PAGE).then((cn: any) => setPageInitialPage(cn));
    } catch (error) {
      // console.log('Count read error', error);
    }
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        //headerLeft: () => <HeadBackButton />,
        headerStyle: {
          backgroundColor: Colors.colorWhite,
        },
      }}>
      {RootRoutes.map((route) => {
        return renderScreen(route);
      })}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

 export function renderTabs({
  name,
  component,
  options = {},
  initialParams = {}
}: TabsRenderProps) {
  return (
    <BottomTab.Screen
      name={name}
      component={component}
      options={options}
      initialParams={initialParams}
    />
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  
  return (
    <BottomTab.Navigator
      initialRouteName="DashboardTabNavigator"
      backBehavior='history'
      screenOptions={{
        tabBarActiveTintColor: Colors.colorWhite,
        tabBarInactiveTintColor: Colors.colorInactiveDrawerText,
        tabBarStyle: {
          backgroundColor: Colors.colorOne,
          paddingTop: Fonts.h(10),
          paddingBottom: Fonts.h(10),
          height: Fonts.h(80)
        }
      }}>
      <BottomTab.Screen
        name="DashboardTabNavigator"
        component={DashboardTabNavigator}
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarIcon: ({ color }) => <RNEIcon name="pie-chart" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />,
        }}
      />
      <BottomTab.Screen
        name="MessageTabNavigator"
        component={DashboardTabNavigator}
        options={{
          title: 'Messages',
          headerShown: false,
          tabBarIcon: ({ color }) => <RNEIcon name="chatbubbles" type='ionicon' iconStyle={{fontSize: Fonts.h(20)}} color={color} tvParallaxProperties />,
        }}
      />
     
    </BottomTab.Navigator>
  );
}

const InTabStack = createNativeStackNavigator();

function DashboardTabNavigator() {
  return (
    <InTabStack.Navigator
    >
      {DashboardTabRoutes.map((route) => {
        return renderDashboardScreen(route);
      })}
    </InTabStack.Navigator>
  );
}


