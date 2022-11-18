import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, Images} from '../common';
import {PrimaryButton} from './PrimaryButton';
import {Spacer} from './Spacer';

export interface LoginSuccessProps {
  onHome: () => void;
}

export const LoginSucess = (props: LoginSuccessProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image source={Images.loginSuccessRibbon} style={styles.ribbon} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Once again you login successfully into Sofihub app
        </Text>
        <Spacer space={32} />
        <PrimaryButton text="Go to home" onClick={props.onHome} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.loaderBackground,
    justifyContent: 'center',
  },
  mainContainer: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    borderRadius: 24,
    padding: 32,
  },
  ribbon: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.SFBold,
    fontWeight: '700',
    color: Colors.primaryText,
    textAlign: 'center',
    marginTop: 48,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: Fonts.SFRegular,
    fontWeight: '400',
    color: Colors.secondaryText,
    textAlign: 'center',
    marginTop: 16,
  },
});
