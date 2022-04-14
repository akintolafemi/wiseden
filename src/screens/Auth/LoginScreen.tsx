import React, { useState, useEffect, useRef } from 'react'; 
import { StyleSheet, SafeAreaView, StatusBar, ImageBackground, View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button as RNEButton, Input as RNEInput, Icon as RNEIcon } from 'react-native-elements';
import { Modalize } from 'react-native-modalize';

import { RootStackScreenProps } from '../../../types';
import { Fonts, GlobalStyles, Colors, SharedPref } from '../../commons';

import { AppLogoOne } from '../../components/AppLogos';
import OkModal from '../../components/Alerts/OkModal';
import ErrorModal from '../../components/Alerts/ErrorModal';
import ModalLabel from '../../components/Labels/ModalLabel';

import { API } from '../../network';

export default function LoginScreen({ navigation }: RootStackScreenProps<'LoginScreen'>) {
  const [logoData, setLogoData] = useState(null);
  const [formView, setFormView] = useState('login');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subdomain, setSubDomain] = useState('');
  const [showPassword, setShowPassword] = useState({icon: 'eye', val: true});
  const [regViewExtraData, setRgVEData] = useState({
    label: `Create your Account`,
    subtext: `Fill the fields to create account`,
    btnText: 'Create Account',
  });

  const [showOkModal, setShowOkModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [okMessage, setOkMesage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const modalizeRef = useRef<Modalize>(null);
  const emailInputRef = useRef(null);
  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const mobileInputRef = useRef(null);

  function openLoginModal () {
    setLogoData({...logoData, size: 'small', withLabel: false, containerStyle: {position: 'absolute', top: Fonts.h(100), left: Fonts.w(25)}})
    modalizeRef.current?.open();
  }

  async function doAction() {
    if (firstname === "" && formView === "register")
      firstNameInputRef.current?.focus();
    else if (lastname === "" && formView === "register")
      lastNameInputRef.current?.focus();
    else if (email === "")
      emailInputRef.current?.focus()
    else if (password === "" && formView !== "forgotpassword")
      passwordInputRef.current?.focus()
    else {
      try{
        setLoading(true);
        switch (formView) {
          case 'login':
            // const usernameReq = await API.loginUsername({email: email, medium: 'mobile'});
            // if (usernameReq.responseState) {
            //   const passwordReq = await API.loginPassword({suppliedPassword: password, usernameToken: usernameReq.loginAttempt.usernameToken, medium: "mobile"});
            //   if (passwordReq.responseState) {
            //     await SharedPref.storePageCount("1");
            //     await SharedPref.storeToken(passwordReq.loginAttempt.passwordToken);
            //     await SharedPref.storeProfileData(passwordReq.loginAttempt.loggedUser);
            //     setEmail("");
            //     setPassword("");
                navigation.navigate('DrawerTabNavigator');
            //   }
            //   else {
            //     setErrorMessage(passwordReq.reponseMessage);
            //     setShowErrorModal(true);
            //   }
            // }
            // else {
            //   setErrorMessage(usernameReq.reponseMessage);
            //   setShowErrorModal(true);
            // }
            // navigation.navigate('DrawerTabNavigator');
            break;
          
          case 'register':
            const registerReq = await API.createAccount({
              fullname: `${firstname} ${lastname}`,
              password: password,
              usertype: "client",
              email: email,
            });
            console.log(registerReq);
            if (registerReq.responseState) {
              alert(registerReq.message);
              setFirstname(""); setLastname(""); setMobile(""); setEmail(""); setPassword("");
              navigation.navigate('SetupScreen');
            }
            else {
              setErrorMessage(registerReq.reponseMessage);
              setShowErrorModal(true);
            }
            break;
        
          default:
            break;
        }
        setLoading(false);
      }
      catch(e) {
        setLoading(false);
        console.log(e);
        setShowErrorModal(true);
        setErrorMessage('Unknown error occured');
      }
    }
  }

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
        <View style={{ flex: 1, paddingHorizontal: Fonts.w(15), justifyContent: 'center', alignItems: 'center'}}>
          <AppLogoOne 
            withLabel={logoData?.withLabel}
            containerStyle={logoData?.containerStyle}
            size={logoData?.size}
          />
        </View>
        <View style={{ paddingHorizontal: Fonts.w(15), paddingBottom: Fonts.h(120) }}>
          <RNEButton
            title='Sign In'
            containerStyle={GlobalStyles.buttonContainerStyle}
            buttonStyle={[GlobalStyles.buttonStyle, {}]}
            onPress={() => {
              setFormView('login')
              openLoginModal()
            }}
          />
          <RNEButton
            title='Sign Up'
            containerStyle={[GlobalStyles.buttonContainerStyle, {backgroundColor: Colors.colorWhite}]}
            buttonStyle={[GlobalStyles.buttonStyle, {backgroundColor: Colors.colorWhite}]}
            titleStyle={{color: Colors.colorOne}}
            onPress={() => {
              setFormView('register')
              openLoginModal()
            }}
          />
        </View>
      </ImageBackground>
      <Modalize 
        ref={modalizeRef}
        adjustToContentHeight={true}
        withHandle={false}
        onClosed={() => {
          setFormView('login');
          setRgVEData(
            {
              label: `Create your Account`,
              subtext: `Fill the fields to create account`,
              btnText: 'Create Account',
            }
          );
        }}
        HeaderComponent={<ModalLabel label={formView === 'login' ? 'Sign In' : regViewExtraData.label} />}
        modalStyle={{paddingHorizontal: Fonts.w(20), paddingTop: Fonts.h(35), borderTopLeftRadius: Fonts.w(30), borderTopRightRadius: Fonts.w(30)}}
      >
        <View style={{paddingBottom: Fonts.h(100)}}>
          <KeyboardAvoidingView>
            {formView === 'register' ? 
              (<>
                <RNEInput
                  placeholder='Firstname'
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  placeholderTextColor={Colors.colorTwo}
                  value={firstname}
                  onChangeText={text => setFirstname(text)}
                  returnKeyType="next"
                  keyboardType="default"
                  ref={firstNameInputRef}
                  onSubmitEditing={(e) => {
                    lastNameInputRef.current?.focus()
                  }}
                />
                <RNEInput
                  placeholder='Lastname'
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  placeholderTextColor={Colors.colorTwo}
                  value={lastname}
                  onChangeText={text => setLastname(text)}
                  returnKeyType="next"
                  keyboardType="default"
                  ref={lastNameInputRef}
                  onSubmitEditing={(e) => {
                    mobileInputRef.current?.focus()
                  }}
                />
                <RNEInput
                  placeholder='Mobile Number'
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  placeholderTextColor={Colors.colorTwo}
                  value={mobile}
                  onChangeText={text => setMobile(text)}
                  returnKeyType="next"
                  keyboardType="phone-pad"
                  ref={mobileInputRef}
                  onSubmitEditing={(e) => {
                    emailInputRef.current?.focus()
                  }}
                />
                </>
              )
              : null
            }
            {
              formView === 'forgotpassword' ? (
                <>
                  <RNEInput
                    placeholder='Your email address'
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    containerStyle={styles.containerStyle}
                    placeholderTextColor={Colors.colorTwo}
                    value={subdomain}
                    onChangeText={text => setSubDomain(text)}
                    returnKeyType="done"
                    keyboardType="email-address"
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      marginBottom: Fonts.h(25),
                      marginTop: Fonts.h(-20)
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setRgVEData(
                          {
                            label: `Sign In`,
                            subtext: `If your email is found, we will send you instructions on how to retrieve your password`,
                            btnText: 'Submit',
                          }
                        );
                        setFormView('login');
                      }}
                    >
                      <Text
                        style={{
                          color: Colors.colorDarkText,
                          fontSize: Fonts.h(13),
                          textDecorationLine: 'underline',
                          fontFamily: Fonts.AverageSans_Regular
                        }}
                      >Back to login</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) :
              (<>
                <RNEInput
                  placeholder='Email here'
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  placeholderTextColor={Colors.colorTwo}
                  value={email}
                  onChangeText={text => setEmail(text)}
                  returnKeyType="next"
                  keyboardType="email-address"
                  ref={emailInputRef}
                  onSubmitEditing={(e) => {
                    passwordInputRef.current?.focus()
                  }}
                />
                <RNEInput
                  placeholder='Password'
                  inputContainerStyle={styles.inputContainerStyle}
                  inputStyle={styles.inputStyle}
                  containerStyle={styles.containerStyle}
                  placeholderTextColor={Colors.colorTwo}
                  value={password}
                  onChangeText={text => setPassword(text)}
                  returnKeyType="done"
                  keyboardType="default"
                  secureTextEntry={showPassword.val}
                  rightIcon={
                    <RNEIcon
                      type='ionicon'
                      name={showPassword.icon}
                      color={Colors.colorTwo}
                      size={Fonts.h(16)}
                      tvParallaxProperties
                      onPress={()=>{
                        showPassword.val ? 
                          setShowPassword({val: false, icon: 'eye-off'})
                        : setShowPassword({val: true, icon: 'eye'})
                      }}
                    />
                  }
                  ref={passwordInputRef}
                  onSubmitEditing={formView === 'login' ? doAction : null}
                />
                {
                  formView === 'login' ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        marginBottom: Fonts.h(25),
                        marginTop: Fonts.h(-20)
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          setRgVEData(
                            {
                              label: `Retrieve Password`,
                              subtext: `If your email is found, we will send you instructions on how to retrieve your password`,
                              btnText: 'Submit',
                            }
                          );
                          setFormView('forgotpassword');
                        }}
                      >
                        <Text
                          style={{
                            color: Colors.colorDarkText,
                            fontSize: Fonts.h(13),
                            textDecorationLine: 'underline',
                            fontFamily: Fonts.AverageSans_Regular
                          }}
                        >Forgot password?</Text>
                      </TouchableOpacity>
                    </View>
                  ) : null
                }
                </>
              )
            } 
          </KeyboardAvoidingView>
          <RNEButton
            title={formView === 'login' ? 'SIGN IN' : regViewExtraData.btnText}
            containerStyle={GlobalStyles.buttonContainerStyle}
            buttonStyle={[GlobalStyles.buttonStyle, {}]}
            onPress={doAction}
            loading={loading}
          />
          {formView !== 'forgotpassword' ?
            <TouchableOpacity onPress={()=>{formView === 'login' ? setFormView('register') : setFormView('login')}}>
              <Text style={{alignSelf: 'center', textDecorationLine: 'underline', color: Colors.colorTwo, marginTop: Fonts.h(20), fontSize: Fonts.h(12)}}>
                {formView === 'login' ? 'Don\'t have an account yet?' : 'Already have an account? Login'}
              </Text>
            </TouchableOpacity>
          : null}
        </View>
      </Modalize>
      <OkModal
        message={okMessage}
        showModal={showOkModal}
        onConfirm={() => {
          setShowOkModal(false)
        }}
      />
      <ErrorModal
        message={errorMessage}
        showModal={showErrorModal}
        onConfirm={() => {
          setShowErrorModal(false);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlayStyles: {
    height: '100%', 
    width: '100%', 
    backgroundColor: 'linear-gradient(180deg, rgba(16, 178, 180, 0.5) 0%, #0970AA 89.96%)', 
    position: 'absolute'
  },
  inputContainerStyle: {
    paddingHorizontal: Fonts.h(5), 
    height: Fonts.h(50), 
    borderBottomColor: Colors.colorTwo,
  },
  inputStyle: {
    fontSize: Fonts.h(15),
    color: Colors.colorDarkText
  },
  containerStyle: {
    paddingHorizontal: 0
  }
});
