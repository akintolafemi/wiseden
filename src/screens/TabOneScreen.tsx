import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';
import { DrawerTabParamList, RootTabScreenProps } from '../../types';
import {Fonts, Colors} from '../commons'

type Props = DrawerScreenProps<DrawerTabParamList, 'Dashboard'>;
const TabOneScreen: FunctionComponent<Props> = ({navigation}) => {


  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TabOneScreen;
