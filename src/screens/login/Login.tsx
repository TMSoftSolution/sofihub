import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {RootStackParamList} from '../../App';
import {Images} from '../../common';
import {
  EmailInput,
  ForgotPassword,
  PasswordInput,
  PrimaryButton,
  SignUpTextLink,
  Spacer,
  TopNavigationBar,
} from '../../components';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <TopNavigationBar
            title="Login"
            showBack={true}
            onBack={navigation.pop}
          />
          <View style={styles.mainContainer}>
            <Image source={Images.logo} style={styles.logo} />
            <Spacer space={51} />
            <EmailInput />
            <Spacer space={8} />
            <PasswordInput />
            <ForgotPassword
              onClick={() => {
                console.log('forgot password.');
              }}
            />
            <Spacer space={32} />
            <PrimaryButton text="Login" onClick={checkEmailValidation} />
            <Spacer space={24} />
            <SignUpTextLink
              onClick={() => {
                console.log('SignUp button clicked.');
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logo: {
    marginTop: 28,
  },
});

const checkEmailValidation = () => {
  Toast.show({
    type: 'error',
    text1: 'hello',
  });
};
