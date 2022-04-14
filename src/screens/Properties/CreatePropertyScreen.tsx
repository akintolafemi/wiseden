import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { FunctionComponent, useRef, useState } from 'react';
import { StyleSheet, View, Pressable, Image, RefreshControl, Text, FlatList, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import { Icon as RNEIcon, Card, Button as RNEButton, Tooltip as RNETooltip } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { CommonScreenParamList } from '../../../types';
import {Fonts, Colors, GlobalStyles} from '../../commons';
import { Modalize } from 'react-native-modalize';
import ModalLabel from '../../components/Labels/ModalLabel';
import Form from '../../components/Form';
import { useEffect } from 'react';


//components;

//data

type Props = DrawerScreenProps<CommonScreenParamList, 'CreatePropertyScreen'>;
const CreatePropertyScreen: FunctionComponent<Props> = ({navigation}) => {
  
  const [loading, setLoading] = useState(false);

  const [displayType, setDisplayType] = useState('grid');
  const [propertyFormValuesOne, setpropertyFormValuesOne] = useState({
    'property_name': '',
    'property_state': '',
    'property_lga': '',
    'property_address': '',
    'property_pictures': '',
    'property_videos': '',
    'cost_of_land': '',
    'cost_of_building': '',
    'architectural_diagram': '',
    'structural_diagram': '',
    'electrical_diagram': '',
    'year_of_completion': ''
  });

  const modalizeRef = useRef<Modalize>(null);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
      
        return (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            
          </View>
        )
      }
    })
  }, [navigation, displayType]);

  useEffect(() => {
    modalizeRef.current?.open();
  }, [navigation]);

  function onFormChanged(id: string, val: string) {
    // if (val !== "") setDisableBtnContinue(false);
    // else setDisableBtnContinue(true);
    var values: any = propertyFormValuesOne;
    values[`${id}`] = val;
    setpropertyFormValuesOne(values);

    // if(!validateForms(values) || routeParams.data.rfp_vendor_status === "-2")
    //   setDisableTechBtn(true);
    // else
    //   setDisableTechBtn(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modalize
        ref={modalizeRef}
        modalStyle={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          padding: GlobalStyles.paddingArround,
        }}
        scrollViewProps={{
          showsVerticalScrollIndicator: false
        }}
        childrenStyle={{
          paddingBottom: Fonts.h(20)
        }}
      >
        <KeyboardAvoidingView>
          <ModalLabel label={`Fill Basic Property Info`} labelSize={Fonts.h(18)} />
          <Form
            data={[
              {
                field_name: 'property_name',
                field_label: 'Name of Property',
                field_type: 'string',
                noQ: true,
              },
              {
                field_name: 'property_state',
                field_label: 'State',
                field_type: 'enum',
                noQ: true,
                field_options: [{
                  option_title: 'Lagos',
                  option_value: 'lagos',
                }]
              },{
                field_name: 'property_lga',
                field_label: 'LGA',
                field_type: 'enum',
                noQ: true,
                field_options: [{
                  option_title: 'Epe',
                  option_value: 'epe',
                }]
              },{
                field_name: 'property_address',
                field_label: 'Address',
                field_type: 'textarea',
                noQ: true,
              },{
                field_name: 'property_pictures',
                field_label: 'Add Picture(s)',
                field_type: 'file',
                noQ: true,
              },{
                field_name: 'property_videos',
                field_label: 'Add Picture(s)',
                field_type: 'file',
                noQ: true,
              }
            ]}  
            values={propertyFormValuesOne}
            onInputChanged={onFormChanged}
          />
          <ModalLabel label={`Fill More Info On Property`} labelSize={Fonts.h(15)} />
          <Form
            data={[
              {
                field_name: 'cost_of_land',
                field_label: 'Cost of Land',
                field_type: 'numeric',
                noQ: true,
              },
              {
                field_name: 'cost_of_building',
                field_label: 'Cost of Building',
                field_type: 'numeric',
                noQ: true,
              },{
                field_name: 'architectural_diagram',
                field_label: 'Architectural Diagram',
                field_type: 'file',
                noQ: true,
              },{
                field_name: 'electrical_diagram',
                field_label: 'Electrical Diagram',
                field_type: 'file',
                noQ: true,
              },{
                field_name: 'year_of_completion',
                field_label: 'Year Completed/Aquired',
                field_type: 'date',
                noQ: true,
              }
            ]}  
            values={propertyFormValuesOne}
            onInputChanged={onFormChanged}
          />
          <View style={{
            flexDirection: 'row',
            justifyContent: "flex-end"
          }}>
            <RNEButton
              title={`Cancel`}
              onPress={() => {
                setpropertyFormValuesOne({
                  'property_name': '',
                  'property_state': '',
                  'property_lga': '',
                  'property_address': '',
                  'property_pictures': '',
                  'property_videos': '',
                  'cost_of_land': '',
                  'cost_of_building': '',
                  'architectural_diagram': '',
                  'structural_diagram': '',
                  'electrical_diagram': '',
                  'year_of_completion': ''
                });
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
      </Modalize>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GlobalStyles.paddingArround,
    paddingTop: Fonts.h(-30),
    paddingBottom: Fonts.h(20),
    backgroundColor: Colors.colorWhite
  },
});

export default CreatePropertyScreen;
