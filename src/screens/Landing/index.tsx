import React, { useState, useEffect, useRef } from 'react'; 
import { StyleSheet, SafeAreaView, StatusBar, ImageBackground, View, Text, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native';
import { Icon as RNEIcon, Input, Button as RNEButton } from 'react-native-elements';
import { RootStackScreenProps } from '../../../types';
import { Fonts, GlobalStyles, Colors } from '../../commons';

import MapView from "react-native-map-clustering";
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import LogoTitle from '../../components/Labels/LogoTitle';
import AutoSuggest from '../../components/Boxed/AutoSuggest';
import Form from '../../components/Form';

import { SharedPref } from '../../commons';

export default function LandingHomeScreen({ navigation }: RootStackScreenProps<'LandingHomeScreen'>) {

  const mapRef = useRef<MapView>(null);

  const [searchParam, setSearchParam] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searching, setSearching] = useState(false);
  const searchInputRef = useRef(null);
  
  const [userId, setUserId] = useState(null);

  const [suggestedSearch, setSuggestedSearch] = useState([
    'Eko hotel, Lagos',
    'Idumota, Lagos',
    'Lekki Phase 1'
  ]);


  const initialRegion = {
    latitude: 6.561060587360963,
    longitude: 3.1494934208550776,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15
  };

  function renderRandomMarkers(n: number) {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = initialRegion;
    return new Array(n).fill(0).map((x, i) => (
      <Marker
        key={i}
        coordinate={{
          latitude: latitude + (Math.random() - 0.2) * latitudeDelta,
          longitude: longitude + (Math.random() - 0.2) * longitudeDelta
        }}
        title={`Place ${i.toString()}`}
      />
    ));
  }

  useEffect(() => {

    navigation.addListener('focus', () => {
      SharedPref.getProfileID().then((id) => {
        setUserId(id)
      }).catch((e) => {
        console.log(e);
      })
    });

  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor='transparent'
        translucent={true}
      />
      
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={initialRegion}
      >
        {renderRandomMarkers(6)}
      </MapView>
      <View style={{
        position: "absolute",
        top: 0,
        width: "100%",
        height: "100%",
        paddingTop: Fonts.h(50),
        paddingHorizontal: Fonts.w(10)
      }}>
        <View
          style={{
            padding: Fonts.w(10),
            backgroundColor: Colors.colorWhite,
            alignSelf: "flex-end",
            borderRadius: Fonts.h(10)
          }}
        >
          <RNEIcon 
            type='ionicon'
            name='person'
            color={Colors.colorThree}
            tvParallaxProperties
            onPress={() => userId === null ? navigation.navigate("LoginScreen") : navigation.navigate("DrawerTabNavigator")}
          />
        </View>
        <View style={{
          paddingTop: Fonts.h(200),
          paddingHorizontal: Fonts.w(10)
        }}>
          <AutoSuggest
            placeholder={`Search by street name, city, state...`}
            searchParam={searchParam}
            onChangeText={(v) => setSearchParam(v)}
            searchInputRef={searchInputRef}
            suggestedSearch={suggestedSearch}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: Fonts.h(-20)
            }}
          >
            <Input 
              placeholder={'Min Price'}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              containerStyle={[styles.containerStyle, {flex: 1, marginRight: Fonts.w(5)}]}
              placeholderTextColor={Colors.colorBlack}
              value={minPrice}
              onChangeText={text => setMinPrice(text)}
              returnKeyType="done"
              keyboardType="numeric"
              onSubmitEditing={(e) => {
              }}
              autoCorrect={false}
            />
            <Input 
              placeholder={'Max Price'}
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={[styles.inputStyle]}
              containerStyle={[styles.containerStyle, {flex: 1, marginLeft: Fonts.w(5)}]}
              placeholderTextColor={Colors.colorBlack}
              value={maxPrice}
              onChangeText={text => setMaxPrice(text)}
              returnKeyType="done"
              keyboardType="numeric"
              onSubmitEditing={(e) => {
              }}
              autoCorrect={false}
            />
          </View>
          <AutoSuggest
            placeholder={`Property Type`}
            searchParam={propertyType}
            onChangeText={(v) => setPropertyType(v)}
            suggestedSearch={[
              'Type 1', 'Type 2', 'Type 3', 'Type 4'
            ]}
            defaultSelect
            viewStyle={{
              marginTop: Fonts.h(-20)
            }}
          />
          <RNEButton
            title={`Search`}
            containerStyle={{
              marginTop: Fonts.h(-20),
              elevation: 3
            }}
            buttonStyle={{
              backgroundColor: Colors.colorThree
            }}
            onPress={() => null}
            loading={searching}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  inputContainerStyle: {
    paddingHorizontal: Fonts.w(10), 
    height: Fonts.h(45), 
    backgroundColor: Colors.colorWhite,
    borderRadius: Fonts.h(4),
  },
  inputStyle: {
    fontSize: Fonts.h(13),
    color: Colors.colorDarkText,
  },
  containerStyle: {
    paddingHorizontal: 0
  }
});
