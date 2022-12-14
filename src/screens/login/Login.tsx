import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';
import {Errors, Images, showError} from '../../common';
import {
  EmailInput,
  ForgotPassword,
  Loader,
  LoginSucess,
  PasswordInput,
  PrimaryButton,
  SignUpTextLink,
  Spacer,
  TopNavigationBar,
} from '../../components';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [emailValidate, setEmailValidate] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

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
      showError(Errors.email);
      return;
    }
    if (!passwordValidate) {
      showError(Errors.password);

      return;
    }

    Keyboard.dismiss();
    login();
  };

  const login = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in!');
        setLoading(false);
        setLoginSuccess(true);
      })
      .catch(error => {
        console.error(error.message);
        showError(error.message);
        setLoading(false);
        setLoginSuccess(false);
      });
  };

  const onHome = () => {
    setLoginSuccess(false);
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
                // console.log('forgot password.');
                navigation.navigate('SignUpSuccess', {name: 'Tallman'});
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
      {loginSuccess && <LoginSucess onHome={onHome} />}
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
