import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Colors, Fonts} from '../common';

export interface PasswordInputProps {
  onChange(valid: boolean, password: string): void;
}

export const PasswordInput = (props: PasswordInputProps) => {
  const [show, setShow] = useState(false);
  const [valid, setValid] = useState(false);

  return (
    <View style={styles.container}>
      <IconButton
        icon={'lock-outline'}
        size={24}
        color={Colors.secondaryText}
        style={styles.lockIcon}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={!show}
        cursorColor={Colors.primary}
        onChangeText={text => {
          if (text.length < 8) {
            setValid(false);
            props.onChange(false, text);
          } else {
            setValid(true);
            props.onChange(true, text);
          }
        }}
      />
      <IconButton
        icon={'eye-off-outline'}
        size={24}
        color={Colors.secondaryText}
        style={styles.visibleIcon}
        onPress={() => {
          setShow(!show);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 28,
    borderColor: Colors.primaryBorder,
    backgroundColor: Colors.primaryInput,
    borderWidth: 1,
  },
  lockIcon: {
    marginStart: 16,
    alignSelf: 'center',
  },
  visibleIcon: {
    alignSelf: 'center',
    marginEnd: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.SFRegular,
    fontWeight: '400',
  },
});
