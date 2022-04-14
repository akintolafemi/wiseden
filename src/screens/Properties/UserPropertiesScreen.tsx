import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent, useRef, useState } from 'react';
import { StyleSheet, View, Pressable, Image, RefreshControl, Text, FlatList, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Icon as RNEIcon, Card, Button as RNEButton, Tooltip as RNETooltip } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { CommonScreenParamList } from '../../../types';
import {Fonts, Colors, GlobalStyles} from '../../commons';
import { Modalize } from 'react-native-modalize';
import ModalLabel from '../../components/Labels/ModalLabel';
import Form from '../../components/Form';


//components;

//data

type Props = DrawerScreenProps<CommonScreenParamList, 'UserPropertiesScreen'>;
const UserPropertiesScreen: FunctionComponent<Props> = ({navigation}) => {
  
  const [loading, setLoading] = useState(false);

  const [displayType, setDisplayType] = useState('grid');
  const [serviceFormValues, setServiceFormValues] = useState({
    'service_purpose': '',
    'service_payment_plan': '',
    'service_sharing_mode': '',
    'service_description': '',
  });

  const modalizeRef = useRef<Modalize>(null);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
      
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable
              onPress={() => displayType === 'grid' ? setDisplayType('menu') : setDisplayType('grid')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <RNEIcon
                type="ionicon"
                name={displayType}
                size={25}
                color={Colors.colorDarkText}
                style={{ marginRight: 15 }}
                tvParallaxProperties
              />
            </Pressable>
            <RNETooltip
              popover={<View style={{
                paddingVertical: Fonts.h(10)
              }}>
                <TouchableOpacity style={{ marginVertical: Fonts.h(5) }}>
                  <Text>
                    A - Z
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: Fonts.h(5) }}>
                  <Text>
                    Newest - Oldest
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginVertical: Fonts.h(5) }}>
                  <Text>
                    Oldest - Newest
                  </Text>
                </TouchableOpacity>
              </View>}
              withPointer={true}
              backgroundColor={Colors.colorWhite}
              height={Fonts.h(150)}
              withOverlay={false} 
            >
              <RNEIcon
                type="ionicon"
                name="filter"
                size={25}
                color={Colors.colorDarkText}
                style={{ marginRight: 15 }}
                tvParallaxProperties
              />
            </RNETooltip>
          </View>
        )
      }
    })
  }, [navigation, displayType]);

  const refreshing = () => {

  }

  const onEndReached = (e) => {

  }

  function onFormChanged(id: string, val: string) {
    // if (val !== "") setDisableBtnContinue(false);
    // else setDisableBtnContinue(true);
    var values: any = serviceFormValues;
    values[`${id}`] = val;
    setServiceFormValues(values);

    // if(!validateForms(values) || routeParams.data.rfp_vendor_status === "-2")
    //   setDisableTechBtn(true);
    // else
    //   setDisableTechBtn(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent: "flex-end"
      }}>
        <RNEButton
          title={`Add Service Charges`}
          onPress={() => {
            modalizeRef.current?.open();
          }}
          buttonStyle={{
            backgroundColor: Colors.colorOne
          }}
          titleStyle={{
            fontSize: Fonts.h(13)
          }}
        />
        <RNEButton
          title={`Add a Property`}
          onPress={() => navigation.navigate("CreatePropertyScreen")}
          buttonStyle={{
            backgroundColor: Colors.colorThree
          }}
          titleStyle={{
            fontSize: Fonts.h(13)
          }}
          containerStyle={{
            marginLeft: Fonts.w(10)
          }}
        />
      </View>
      <FlatList 
        data={[{
          id: '1',
          title: 'Property A',
          imageUri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
          note: `The idea with React Native Elements is more about component
          structure than actual design.`
        }, {
          id: '2',
          title: 'Property B',
          imageUri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
          note: `The idea with React Native Elements is more about component
          structure than actual design.`
        },{
          id: '3',
          title: 'Property B',
          imageUri: 'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
          note: `The idea with React Native Elements is more about component
          structure than actual design.`
        }]}
        refreshing={loading}
        onRefresh={refreshing}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={e => onEndReached(e)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => displayType === 'grid' ? (
          <PropertyView
            id={item.id.toString()}
            title={item.title}
            imageUri={item.imageUri}
            note={item.note}
          />
        ) : (
          <PropertyViewTwo
            id={item.id.toString()}
            title={item.title}
            imageUri={item.imageUri}
            note={item.note}
          />
        )}
        ListEmptyComponent={
          !loading ? (
          <View style={{alignItems: "center"}}>
            <Text>{`No properties found`}</Text>
          </View> ) : null
        }
      />
      <Modalize 
        ref={modalizeRef}
        adjustToContentHeight={true}
        withHandle={false}
        onClosed={() => {
        }}
        HeaderComponent={<ModalLabel label={`Add Service Charges`} labelSize={Fonts.h(18)} />}
        modalStyle={{paddingHorizontal: Fonts.w(20), paddingTop: Fonts.h(35), borderTopLeftRadius: Fonts.w(30), borderTopRightRadius: Fonts.w(30)}}
      >
        <View style={{paddingBottom: Fonts.h(100)}}>
          <KeyboardAvoidingView>
            <Form
              data={[
                {
                  field_name: 'service_purpose',
                  field_label: 'Purpose',
                  field_type: 'string',
                  noQ: true,
                },
                {
                  field_name: 'service_payment_plan',
                  field_label: 'Payment Plan',
                  field_type: 'enum',
                  noQ: true,
                  field_options: [{
                    option_title: 'Daily',
                    option_value: 'daily',
                  },{
                    option_title: 'Weekly',
                    option_value: 'weekly',
                  },{
                    option_title: 'Monthly',
                    option_value: 'monthly',
                  },{
                    option_title: 'Annually',
                    option_value: 'annually',
                  },{
                    option_title: 'Quaterly',
                    option_value: 'quaterly',
                  },{
                    option_title: 'Biannually',
                    option_value: 'biannually',
                  },{
                    option_title: 'Biennially',
                    option_value: 'biennially',
                  }]
                },{
                  field_name: 'service_sharing_mode',
                  field_label: 'Sharing Mode',
                  field_type: 'enum',
                  noQ: true,
                  field_options: [{
                    option_title: 'Distribute Equally',
                    option_value: 'equally',
                  },{
                    option_title: 'Apportion with Discretion',
                    option_value: 'discretion',
                  }]
                },{
                  field_name: 'service_description',
                  field_label: 'Description',
                  field_type: 'textarea',
                  noQ: true,
                }
              ]}  
              values={serviceFormValues}
              onInputChanged={onFormChanged}
            />
            <View style={{
              flexDirection: 'row',
              justifyContent: "flex-end"
            }}>
              <RNEButton
                title={`Cancel`}
                onPress={() => {
                  setServiceFormValues({
                    'service_purpose': '',
                    'service_payment_plan': '',
                    'service_sharing_mode': '',
                    'service_description': '',
                  });
                  modalizeRef.current?.close();
                }}
                buttonStyle={{
                  backgroundColor: Colors.colorPink,
                  width: Fonts.w(100)
                }}
                titleStyle={{
                  fontSize: Fonts.h(13)
                }}
              />
              <RNEButton
                title={`Save`}
                buttonStyle={{
                  backgroundColor: Colors.colorTwo,
                  width: Fonts.w(100)
                }}
                titleStyle={{
                  fontSize: Fonts.h(13)
                }}
                containerStyle={{
                  marginLeft: Fonts.w(10)
                }}
              />
            </View>     
          </KeyboardAvoidingView>
        </View>
      </Modalize>
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

export default UserPropertiesScreen;

export const PropertyViewTwo = ({
  id = '1',
  title = '',
  imageUri = '',
  note = ''
} : {
  id?: string;
  title?: string;
  imageUri?: string;
  note?: string;
}) => {
  return (
    <TouchableOpacity key={id}>
      <Card
        wrapperStyle={{
        }}
        containerStyle={{
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <View 
          style={{flexDirection: 'row', alignItems: "center"}}
        >
          <Image source={{uri: imageUri}} style={{height: Fonts.h(100), width: Fonts.h(100)}} />
          <View
            style={{
              marginLeft: Fonts.w(20),
              flex: 1
            }}
          > 
            <Card.Title>{title}</Card.Title>
            <Card.Divider />
            <View
              style={{
                marginTop: Fonts.h(10)
              }}
            >
              <Text style={{ marginBottom: 10 }}>
                {note}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
}

export const PropertyView = ({
  id = '1',
  title = '',
  imageUri = '',
  note = ''
} : {
  id?: string;
  title?: string;
  imageUri?: string;
  note?: string;
}) => {
  return (
    <TouchableOpacity key={id}>
      <Card
        wrapperStyle={{
        }}
        containerStyle={{
          marginLeft: 0,
          marginRight: 0
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
              imageUri,
          }}
        />
        <View
          style={{
            marginTop: Fonts.h(10)
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {note}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  )
}