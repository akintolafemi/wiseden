import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Pressable, Image, Text } from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { DashboardTabParamList } from '../../../types';
import {Fonts, Colors, GlobalStyles} from '../../commons';


//components;

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
      >
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
