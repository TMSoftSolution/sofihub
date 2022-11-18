import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {Images} from '../../common';
import {
  NormalInput,
  PrimaryButton,
  Spacer,
  TermsAgree,
  TopNavigationBar,
} from '../../components';

type SignUpProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUp = ({navigation}: SignUpProps) => {
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
          <NormalInput placeholder="First Name" onChange={() => {}} />
          <Spacer space={16} />
          <NormalInput placeholder="Last Name" onChange={() => {}} />
          <Spacer space={16} />
          <NormalInput placeholder="E-mail" onChange={() => {}} />
          <Spacer space={16} />
          <NormalInput placeholder="Phone Number" onChange={() => {}} />
          <Spacer space={16} />
          <NormalInput placeholder="Password" onChange={() => {}} />
          <Spacer space={16} />
          <NormalInput placeholder="Confirm Password" onChange={() => {}} />
          <Spacer space={16} />
          <TermsAgree
            onAgree={agree => {
              console.log(agree);
            }}
            onTerms={() => {}}
            onPrivacy={() => {}}
          />
          <Spacer space={32} />
          <PrimaryButton text="Sign Up" onClick={() => {}} />
          <Spacer space={32} />
        </View>
      </ScrollView>
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
