import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors, Fonts} from '../common';

export interface NormalInputProps {
  placeholder: string;
  onChange(valid: boolean, text: string): void;
}

export const NormalInput = (props: NormalInputProps) => {
  const [valid, setValid] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        cursorColor={Colors.primary}
        onChangeText={text => {
          props.onChange(true, text);
        }}
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
