import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Pressable, Image, RefreshControl, Text } from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { DrawerTabParamList } from '../../../types';
import {Fonts, Colors, GlobalStyles} from '../../commons';


//components;

//data

type Props = DrawerScreenProps<DrawerTabParamList, 'Account'>;
const ProfileScreen: FunctionComponent<Props> = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      
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

export default ProfileScreen;
