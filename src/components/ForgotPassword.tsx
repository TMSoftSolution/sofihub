import {StyleSheet, Text} from 'react-native';
import {Colors, Fonts} from '../common';

export interface ForgotPasswordPros {
  onClick: (() => void) | undefined;
}

export const ForgotPassword = ({onClick}: ForgotPasswordPros) => {
  return (
    <Text onPress={onClick} style={styles.text}>
      Forgot Password?
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingVertical: 8,
    fontFamily: Fonts.SFMedium,
    fontSize: 14,
    color: Colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
});
