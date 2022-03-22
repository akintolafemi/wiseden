import React, { useState, useEffect, useRef } from 'react'; 
import { StyleSheet, SafeAreaView, StatusBar, ImageBackground, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Icon as RNEIcon, ButtonGroup as RNEButtonGroup, Input as RNEInput } from 'react-native-elements';
import { RootStackScreenProps } from '../../../types';
import { Fonts, GlobalStyles, Colors } from '../../commons';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

export default function SetupScreen({ navigation }: RootStackScreenProps<'SetupScreen'>) {

  const [interest, setInterest] = useState(null);

  return (
    <SafeAreaView style={{flex: 1, paddingTop: Fonts.h(50)}}>
      <StatusBar
        backgroundColor='transparent'
        translucent={true}
      />
      <ProgressSteps
        progressBarColor={Colors.colorBlack}
        activeLabelColor={Colors.colorOne}
        activeStepIconBorderColor={Colors.colorOne}
        completedStepIconColor={Colors.colorOne}
        completedLabelColor={Colors.colorOne}
      >
        <ProgressStep label="Interest" setInterest="Back" nextBtnText="Skip" nextBtnTextStyle={styles.nextBtnTextStyle} previousBtnTextStyle={styles.previousBtnTextStyle}>
          <View style={styles.progressStepView}>
            <Text
              style={{
                color: Colors.colorDarkText,
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(14)
              }}
            >
              Help us understand your interest
            </Text>
            <Text
              style={{
                color: Colors.colorDarkText,
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(22)
              }}
            >
              What is your interest?
            </Text>
            <RNEButtonGroup
              buttons={['Rent', 'Jsut Look Around']}
              selectedIndex={interest}
              onPress={(value) => {
                setInterest(value);
              }}
              containerStyle={{ marginVertical: 20 }}
              selectedButtonStyle={{
                backgroundColor: Colors.colorOne
              }}
            />
          </View>
        </ProgressStep>
        <ProgressStep label="Locality" setInterest="Back" nextBtnText="Skip" nextBtnTextStyle={styles.nextBtnTextStyle} previousBtnTextStyle={styles.previousBtnTextStyle}>
          <View style={styles.progressStepView}>
            <Text
              style={{
                color: Colors.colorDarkText,
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(14)
              }}
            >
              Search by city, state or your neighbourhood
            </Text>
            <Text
              style={{
                color: Colors.colorDarkText,
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(22)
              }}
            >
              Prefered location?
            </Text>
            <RNEInput
              inputContainerStyle={styles.inputContainerStyle}
              inputStyle={styles.inputStyle}
              containerStyle={styles.containerStyle}
              placeholderTextColor={Colors.colorTwo}
              returnKeyType="done"
              keyboardType="default"
            />
            <View>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.colorOne,
                    fontSize: Fonts.h(14)
                  }}
                >Use my current location</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ProgressStep>
        <ProgressStep label="Budget" setInterest="Back" nextBtnText="Skip" finishBtnText="Finish" nextBtnTextStyle={styles.nextBtnTextStyle} previousBtnTextStyle={styles.previousBtnTextStyle}>
          <View style={styles.progressStepView}>
            <Text
              style={{
                color: Colors.colorDarkText,
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(14)
              }}
            >
              Set your own budget
            </Text>
            <Text
              style={{
                color: Colors.colorDarkText,
                fontFamily: Fonts.AverageSans_Regular,
                fontSize: Fonts.h(22)
              }}
            >
              Price Range?
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}
            >
              <View style={{flex: 1, marginRight: Fonts.w(10)}}>
                <RNEInput
                  placeholder='Min'
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  containerStyle={[styles.containerStyle]}
                  placeholderTextColor={Colors.colorTwo}
                  returnKeyType="done"
                  keyboardType="number-pad"
                />
              </View>
              <View style={{flex: 1, marginLeft: Fonts.w(10)}}>
                <RNEInput
                  placeholder='Max'
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  containerStyle={[styles.containerStyle]}
                  placeholderTextColor={Colors.colorTwo}
                  returnKeyType="done"
                  keyboardType="number-pad"
                />
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Text
                  style={{
                    color: Colors.colorOne,
                    fontSize: Fonts.h(14)
                  }}
                >Use my current location</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ProgressStep>
    </ProgressSteps>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  progressStepView: {
    flex: 1,
    paddingHorizontal: Fonts.w(20),
    paddingTop: Fonts.h(50)
  },
  nextBtnTextStyle: {
    color: Colors.colorOne,
  },
  previousBtnTextStyle: {
    color: Colors.colorDarkText
  },
  inputContainerStyle: {
    paddingHorizontal: Fonts.h(10), 
    height: Fonts.h(50), 
    borderColor: Colors.colorBorder,
    borderWidth: Fonts.h(1)
  },
  inputStyle: {
    fontSize: Fonts.h(15),
    color: Colors.colorDarkText
  },
  containerStyle: {
    paddingHorizontal: 0,
    marginTop: Fonts.h(20)
  }
});
