import React, { useState, useEffect, useRef } from 'react'; 
import { StyleSheet, SafeAreaView, StatusBar, ImageBackground, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Icon as RNEIcon } from 'react-native-elements';
import { RootStackScreenProps } from '../../../types';
import { Fonts, GlobalStyles, Colors } from '../../commons';

import LogoTitle from '../../components/Labels/LogoTitle';

export default function LandingScreen({ navigation }: RootStackScreenProps<'LandingScreen'>) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor='transparent'
        translucent={true}
      />
      <ImageBackground
        source={require('../../assets/images/landing-bg.jpg')}
        style={{flex: 1}}
        imageStyle={{resizeMode: 'cover'}}
      >
        <View style={styles.overlayStyles}></View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginTop: Fonts.h(200),
          }}
        >
          <Text
            style={{
              color: Colors.colorWhite,
              fontFamily: Fonts.AverageSans_Regular,
              fontSize: Fonts.h(18)
            }}
          >
            Hei! Welcome to
          </Text>
          <LogoTitle />
        </View>
        <View
          style={{
            alignItems: 'center',
            marginBottom: Fonts.h(100)
          }}
        >
          <RNEIcon
            onPress={() => navigation.navigate('LoginScreen')}
            type='ionicon'
            name='chevron-forward-circle-outline'
            color={Colors.colorWhite}
            size={Fonts.h(70)}
            tvParallaxProperties
          />
        </View>
      </ImageBackground>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlayStyles: {
    height: '100%', 
    width: '100%', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    position: 'absolute'
  },
});
