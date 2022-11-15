import {StyleSheet, Text} from 'react-native';
import {Colors, Fonts} from '../common';

export interface SignUpTextLinkProps {
  onClick: (() => void) | undefined;
}

export const SignUpTextLink = ({onClick}: SignUpTextLinkProps) => {
  return (
    <Text style={styles.text}>
      Don't have an account?{' '}
      <Text onPress={onClick} style={styles.signUpText}>
        Sign Up
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: Fonts.SFRegular,
    fontSize: 16,
  },
  signUpText: {
    color: Colors.primary,
    fontFamily: Fonts.SFMedium,
  },
});
