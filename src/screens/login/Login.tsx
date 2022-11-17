import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
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
import {Errors, Images} from '../../common';
import {
  EmailInput,
  ForgotPassword,
  Loader,
  PasswordInput,
  PrimaryButton,
  SignUpTextLink,
  Spacer,
  TopNavigationBar,
} from '../../components';
import auth from '@react-native-firebase/auth';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [emailValidate, setEmailValidate] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailChanged = (valid: boolean, email: string) => {
    setEmail(email);
    setEmailValidate(valid);
  };

  const passwordChanged = (valid: boolean, password: string) => {
    setPassword(password);
    setPasswordValidate(valid);
  };

  const checkEmailValidation = () => {
    if (!emailValidate) {
      Toast.show({type: 'error', text1: Errors.emmailValid});
      return;
    }
    if (!passwordValidate) {
      Toast.show({type: 'error', text1: Errors.passwordValid});
      return;
    }

    login();
  };

  const login = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
        setLoading(false);
      });
  };

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
            <EmailInput onChange={emailChanged} />
            <Spacer space={8} />
            <PasswordInput onChange={passwordChanged} />
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
      {loading && <Loader />}
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
