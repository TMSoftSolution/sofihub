import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Colors, Fonts} from '../common';

export interface TermsAgreeProps {
  checked: boolean;
  onAgree(agree: boolean): void;
  onTerms: () => void;
  onPrivacy: () => void;
}

export const TermsAgree = (props: TermsAgreeProps) => {
  return (
    <View style={styles.container}>
      <Checkbox
        status={props.checked ? 'checked' : 'unchecked'}
        onPress={() => {
          props.onAgree(!props.checked);
        }}
        color={Colors.primary}
      />
      <Text style={styles.text}>
        I agree to the{' '}
        <Text style={styles.linkText} onPress={props.onTerms}>
          Terms of Services
        </Text>{' '}
        and{' '}
        <Text style={styles.linkText} onPress={props.onPrivacy}>
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontFamily: Fonts.SFRegular,
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center',
  },
  linkText: {
    color: Colors.primary,
    fontFamily: Fonts.SFMedium,
  },
});
