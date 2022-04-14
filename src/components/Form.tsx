import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Fonts, Colors} from '../commons'
import {Header, Icon as RNEIcon, Card as RNECard, Input as RNEInput, Button as RNEButton, Badge as RNEBadge, CheckBox  as RNECheckBox } from 'react-native-elements';
import {Select as NSelect, CheckIcon as NCheckIcon, NativeBaseProvider, TextArea as NTextArea, HStack as NHStack, Checkbox as NCheckbox} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import SnackBar from 'react-native-snackbar-component';

import { API } from '../network';
import {DateShort} from '../functions/PrettyDate';
import AutoSuggest from './Boxed/AutoSuggest';

const Form = ({
  data,
  onInputChanged,
  values,
  disabledForm = false,
}: {
  data: any;
  onInputChanged?: (field_name: string, text: string) => void;
  values: Object;
  disabledForm?: boolean;
}) => {

  const [state, setState] = useState<{[key: string]: any}>({});

  const [date, setDate] = useState(null);
  const [showDate, setShowDate] = useState(false);

  const [showSnack, setShowSnack] = useState(false);

  const inputStyle = {
    fontSize: Fonts.h(13)
  }

  const checkBoxcontainerStyle = {
    marginTop: 0,
    marginBottom: Fonts.h(15),
    marginLeft: 0,
    paddingLeft: 0
  }

  const openDocumentPicker = async (field_name) => {
    DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    }).then((file) => {
      if (file.type === "success") {
        FileSystem.readAsStringAsync(file.uri, {
          encoding: "base64",
        }).then((res) => {
          Alert.alert('File Upload', 'Are you sure to continue with document upload?', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'Continue', onPress: () => {
              setShowSnack(true);
              // API.updloadDocument({
              //   base64_data: res,
              //   file_extension: 'pdf'
              // }).then((res) => {
              //   console.log(res);
              //   if (res.status === "success"){
              //     onValueChange(field_name, res.s3url);
              //   }              
              //   else {
              //   }
              // }).catch((e) => {
              //   console.log(e);
              // }).finally(() => {
              // });
      
            }},
          ]);
        }).catch((e) => {
          console.log("error reading base64 ", e.toString());
        }).finally(() => {

        })
      }
      else {
        console.log("File picker error");
      }
    }).catch((e) => {
      console.log("file picker error ", e.toString());
      setShowSnack(false);
    }).finally(() => {

    });
  }

  const inputContainerStyle = {borderRadius: Fonts.h(8), borderWidth: Fonts.h(1), borderColor: '#dddddd', paddingHorizontal: Fonts.h(10), height: Fonts.h(48)}


  function onValueChange(field_name: string, text: any) {
    setState({
      ...state,
      [field_name]: text,
    });
    if (onInputChanged) onInputChanged(field_name, text);
  }

  function renderInput(item, key: number) {
    const {field_name, field_label, paramName, field_type, noQ} = item;
    return (
      <>
        <Text
          style={{
            color: Colors.colorDarkText,
            fontSize: Fonts.h(14),
            marginBottom: Fonts.h(5)
          }}
        >
          {!noQ ? `Q${key + 1}. ${field_label}` : `${field_label}`}
        </Text>
        <RNEInput
          key={key}
          value={values[field_name]}
          onChangeText={(t) => onValueChange(field_name, t)}
          inputContainerStyle={[inputContainerStyle, field_type === 'textarea' || field_type === 'Text' ? {
            height: Fonts.h(100),
          } : null]}
          inputStyle={inputStyle}
          containerStyle={{
            paddingLeft: 0,
            paddingRight: 0,
            marginBottom: -10
          }}
          keyboardType= {field_type === 'numeric' || field_type === 'Number' ? "number-pad" : "default"}
          disabled={disabledForm}
          multiline={field_type === 'textarea' || field_type === 'Text' ? true : false}
          numberOfLines={field_type === 'textarea' || field_type === 'Text' ? 4 : 1} 
          textAlignVertical={field_type === 'textarea' || field_type === 'Text' ? 'top' : 'center'}
        />
      </>
    );
  }

  function renderCheckBox(item, key: number) {
    const {field_name, field_label, paramName, noQ} = item;
    return (
      <>
        <Text
          style={{
            color: Colors.colorDarkText,
            fontSize: Fonts.h(14),
            marginBottom: Fonts.h(5)
          }}
        >
          {!noQ ? `Q${key + 1}. ${field_label}` : `${field_label}`}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <RNECheckBox
            checked={values[field_name]}
            onPress={() => !disabledForm ? onValueChange(field_name, 'checkbox') : null}
            checkedColor={Colors.colorTwo}
            containerStyle={checkBoxcontainerStyle}
          />
          <Text
            style={{marginTop: Fonts.h(10), fontSize: Fonts.h(13), color: Colors.colorDarkText}}
          >
            {values[field_name] === true ? `Yes` : `No`}
          </Text>
        </View>
      </>
    );
  }

  function renderFileSelect(item, key: number) {
    const {field_name, field_label, paramName, field_type, noQ} = item;
    return (
      <>
        <Text
          style={{
            color: Colors.colorDarkText,
            fontSize: Fonts.h(14),
            marginBottom: Fonts.h(5)
          }}
        >
          {!noQ ? `Q${key + 1}. ${field_label}` : `${field_label}`}
        </Text>
        <View
          style={[inputContainerStyle, {paddingHorizontal: 0, marginBottom: Fonts.h(30)}]}
        >
          <RNEButton
            title={`${values[field_name] !== undefined && values[field_name] !== '' && values[field_name] !== 'undefined' ? 'File uploaded' : 'Open file manager'}`}
            titleStyle={{
              fontSize: Fonts.h(13),
              color: Colors.colorTwo
            }}
            containerStyle={{
              backgroundColor: Colors.colorWhite, 
              height: Fonts.h(45), 
              borderRadius: Fonts.h(8)
            }}
            buttonStyle={{
              backgroundColor: Colors.colorWhite, 
              height: Fonts.h(45), 
              borderRadius: Fonts.h(8)
            }}
            onPress={() => openDocumentPicker(field_name)}
          />
        </View>
        <SnackBar visible={showSnack} textMessage={`Uploading file in background`} autoHidingTime={2000}/>
      </>
    );
  }

  function renderSelect(item, key: number) {
    const {field_name, field_label, paramName, field_options, response_scores, noQ} = item;
    // var options = allowableValues.split("<A_V_S>");
    var options = field_options ? field_options : [];
    return (
      <NativeBaseProvider>
        <Text
          style={{
            color: Colors.colorDarkText,
            fontSize: Fonts.h(14),
            marginBottom: Fonts.h(5)
          }}
        >
          {!noQ ? `Q${key + 1}. ${field_label}` : `${field_label}`}
        </Text>
        <NSelect
          selectedValue={values[field_name]}
          minWidth={200}
          accessibilityLabel={field_label}
          placeholder={field_label}
          mb={Fonts.h(2)}
          onValueChange={(t) => onValueChange(field_name, t)}
          _selectedItem={{
            bg: Colors.colorTwo,
            endIcon: <NCheckIcon size={4} />,
          }}
          isDisabled={disabledForm}
        >
          {options.map((item, index) => {
            return (<NSelect.Item style={{paddingTop: 5, paddingBottom: 5}} fontSize={Fonts.h(13)} label={item.option_title ? item.option_title : ''} value={item.option_value ? item.option_value : ''} key={index} />);
          })}
        </NSelect>
      </NativeBaseProvider>
    );
  }

  function renderSelectCustom(item, key: number) {
    const {field_name, field_label, paramName, field_options, response_scores, noQ} = item;
    // var options = allowableValues.split("<A_V_S>");
    var options = field_options ? field_options : [];
    return (
      <View>
        <Text
          style={{
            color: Colors.colorDarkText,
            fontSize: Fonts.h(14),
            marginBottom: Fonts.h(5)
          }}
        >
          {!noQ ? `Q${key + 1}. ${field_label}` : `${field_label}`}
        </Text>
        <AutoSuggest
          placeholder={`Property Type`}
          searchParam={field_label}
          onChangeText={(t) => onValueChange(field_name, t)}
          suggestedSearch={options}
          defaultSelect
          viewStyle={{
            marginTop: Fonts.h(-20)
          }}
        />
      </View>
    );
  }

  function renderDateInput(item, key: number) {
    const {field_name, field_label, paramName, field_type, noQ, timeMode} = item;
    
    // const [date, setDate] = useState(null);
    // const [mode, setMode] = useState<"date" | "time">(timeMode ? "time" : "date");
    // const [showDate, setShowDate] = useState(false);

    // const onChange = (event, selectedDate) => {
    //   const currentDate = selectedDate;
    //   setShowDate(false);
    //   setDate(currentDate);
    // };

    return (
      <>
        <Text
          style={{
            color: Colors.colorDarkText,
            fontSize: Fonts.h(14),
            marginBottom: Fonts.h(5)
          }}
        >
          {!noQ ? `Q${key + 1}. ${field_label}` : `${field_label}`}
        </Text>
        <View
          style={[inputContainerStyle, {paddingHorizontal: 0, marginBottom: Fonts.h(30)}]}
        >
          <RNEButton
            title={`Date: ${values[field_name] !== undefined ? values[field_name] : ''}`}
            titleStyle={{
              fontSize: Fonts.h(13),
              color: Colors.colorTwo
            }}
            containerStyle={{
              backgroundColor: Colors.colorWhite, 
              height: Fonts.h(45), 
              borderRadius: Fonts.h(8)
            }}
            buttonStyle={{
              backgroundColor: Colors.colorWhite, 
              height: Fonts.h(45), 
              borderRadius: Fonts.h(8)
            }}
            onPress={() => setShowDate(true)}
          />
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={values[field_name] !== null && values[field_name] !== "" ? new Date(values[field_name]) : new Date()}
              mode={timeMode ? "time" : "date"}
              is24Hour={true}
              onChange={(event, selectedDate) => {
                onValueChange(field_name, DateShort(selectedDate.toString(), 'YYYY-MM-DD'));
                setShowDate(false);
              }}
            />
          )}
        </View>
      </>
    );
  }

  function returnItemType(
    item: any,
    key: number,
  ) {
    if (item) {

      switch (item.field_type) {
        case 'string':
        case 'textarea':
        case 'Text':
          return renderInput(item, key);
        case 'numeric':
        case 'Number':
          return renderInput(item, key);
        case 'boolean':
          return renderCheckBox(item, key);
        case 'enum':
        case 'Radio':
          return renderSelect(item, key);
        case 'enum-custom':
          return renderSelectCustom(item, key);
        case 'file':
        case 'File':
          return renderFileSelect(item, key);
        case 'date':
          return renderDateInput(item, key);
        default:
          return null;
      }
    }
  }

  function renderContent() {
    if (data && data.length) {
      return data.map((item: any, key: any) => (
        <View key={key.toString()}>
          {returnItemType(item, key)}
        </View>
      ));
    }
  }

  return (
    <>
      <View style={{flexGrow: 1}}>
        <View style={{flexGrow: 1}}>{renderContent()}</View>
      </View>
    </>
  );
};
export default Form;
