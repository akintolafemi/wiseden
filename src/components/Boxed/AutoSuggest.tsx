import React, { useState } from "react";
import { View,TouchableOpacity, Dimensions, Text, StyleSheet, StyleProp, ViewStyle, ScrollView } from 'react-native';
import { Icon, Input } from "react-native-elements";
import { Colors, Fonts } from "../../commons";

const AutoSuggest = ({
  suggestedSearch = [],
  searchInputRef,
  searchParam = '',
  onChangeText = () => null,
  placeholder,
  defaultSelect = false,
  viewStyle = {}
} : {
  suggestedSearch?: string[];
  searchInputRef?: any;
  searchParam?: string;
  onChangeText?: any;
  placeholder?: string;
  defaultSelect?: boolean;
  viewStyle?: StyleProp<ViewStyle>;
}) => {

  const [openList, setOpenList] = useState(false);

  return (
    <View style={viewStyle}>
      <Input 
        placeholder={placeholder ? placeholder : 'Search here...'}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        placeholderTextColor={Colors.colorBlack}
        value={searchParam}
        onChangeText={text => {
          text !== '' ?
            setOpenList(true)
          : setOpenList(false)
          onChangeText(text);
        }}
        returnKeyType="go"
        keyboardType="default"
        ref={searchInputRef}
        onSubmitEditing={(e) => {
        }}
        autoCorrect={false}
        onPressIn={() => {
          defaultSelect ? setOpenList(true) : null
        }}
        autoCompleteType="street-address"
        rightIcon={defaultSelect ? (
          <Icon 
            type="ionicon" 
            tvParallaxProperties 
            name="chevron-down"
            onPress={() => {
              defaultSelect ? setOpenList(true) : null
            }}
          />
          ) : null
        }
      />
      {
        openList ? (
          <ScrollView
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            style={{
              paddingVertical: Fonts.h(10),
              backgroundColor: Colors.colorWhite,
              paddingHorizontal:  Fonts.w(10),
              marginTop: Fonts.h(-30),
              borderBottomLeftRadius: Fonts.h(4),
              borderBottomRightRadius: Fonts.h(4),
              elevation: 3,
              zIndex: 100000
            }}
          >
            {suggestedSearch.map((option, index) => (
              <TouchableOpacity
                key={index.toString()}
                style={{
                  borderBottomWidth: Fonts.h(0.5),
                  borderBottomColor: Colors.colorInactiveDrawerText,
                  paddingVertical: Fonts.h(10)
                }}
                onPress={() => {
                  onChangeText(option);
                  setOpenList(false);
                }}
              >
                <Text
                  style={{
                    fontSize: Fonts.h(13),
                    color: Colors.colorDarkText
                  }}
                >{`${option}`}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        ) : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
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

export default AutoSuggest;