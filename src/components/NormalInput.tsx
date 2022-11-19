import {useState} from 'react';
import {StyleSheet, TextInput, View, KeyboardType} from 'react-native';
import {Colors, Fonts} from '../common';

export interface NormalInputProps {
  placeholder: string;
  text: string;
  type: 'email' | 'phone' | 'default';
  secure?: boolean;
  onChange(text: string): void;
}

export const NormalInput = (props: NormalInputProps) => {
  let keyboardType: KeyboardType = 'default';
  switch (props.type) {
    case 'email':
      keyboardType = 'email-address';
      break;
    case 'phone':
      keyboardType = 'number-pad';
      break;
    default:
      keyboardType = 'default';
      break;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        cursorColor={Colors.primary}
        value={props.text}
        onChangeText={text => {
          props.onChange(text);
        }}
        keyboardType={keyboardType}
        secureTextEntry={props.secure}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    borderRadius: 28,
    borderColor: Colors.primaryBorder,
    backgroundColor: Colors.primaryInput,
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    fontFamily: Fonts.SFRegular,
    fontWeight: '400',
  },
});
