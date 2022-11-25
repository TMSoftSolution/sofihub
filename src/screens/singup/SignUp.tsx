import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {EmailPattern, Errors, Images, showError} from '../../common';
import {
  Loader,
  NormalInput,
  PrimaryButton,
  Spacer,
  TermsAgree,
  TopNavigationBar,
} from '../../components';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUp = ({navigation}: SignUpProps) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [isAgree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const checkValidate = () => {
    if (firstName === '') {
      showError(Errors.firstName);
      return;
    }
    if (lastName === '') {
      showError(Errors.lastName);
      return;
    }
    if (!EmailPattern.test(email)) {
      showError(Errors.email);
      return;
    }
    if (lastName === '') {
      showError(Errors.lastName);
      return;
    }
    if (password.length < 8) {
      showError(Errors.password);
      return;
    }
    if (cPassword.length < 8) {
      showError(Errors.password);
      return;
    }
    if (password !== cPassword) {
      showError(Errors.passwordMath);
      return;
    }
    if (!isAgree) {
      showError(Errors.termsAgree);
      return;
    }

    signUp();
  };

  const signUp = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
        setLoading(false);
        setSuccess(true);
      })
      .catch(error => {
        console.error(error.message);
        showError(error.message);
        setLoading(false);
        setSuccess(false);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TopNavigationBar
          title="Register"
          showBack={true}
          onBack={navigation.pop}
        />
        <View style={styles.mainContainer}>
          <Image source={Images.logoWithBrand} style={styles.logo} />
          <Spacer space={32} />
          <NormalInput
            placeholder="First Name"
            text={firstName}
            type="default"
            onChange={text => {
              setFirstName(text);
            }}
          />
          <Spacer space={16} />
          <NormalInput
            placeholder="Last Name"
            text={lastName}
            type="default"
            onChange={text => {
              setLastName(text);
            }}
          />
          <Spacer space={16} />
          <NormalInput
            placeholder="E-mail"
            text={email}
            type="email"
            onChange={text => {
              setEmail(text);
            }}
          />
          <Spacer space={16} />
          <NormalInput
            placeholder="Password"
            text={password}
            type="default"
            secure={true}
            onChange={text => {
              setPassword(text);
            }}
          />
          <Spacer space={16} />
          <NormalInput
            placeholder="Confirm Password"
            text={cPassword}
            type="default"
            secure={true}
            onChange={text => {
              setCPassword(text);
            }}
          />
          <Spacer space={16} />
          <TermsAgree
            checked={isAgree}
            onAgree={agree => {
              setAgree(agree);
            }}
            onTerms={() => {}}
            onPrivacy={() => {}}
          />
          <Spacer space={32} />
          <PrimaryButton text="Sign Up" onClick={checkValidate} />
          <Spacer space={32} />
        </View>
      </ScrollView>
      {loading && <Loader />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  logo: {
    marginTop: 16,
    marginLeft: -4,
  },
});
