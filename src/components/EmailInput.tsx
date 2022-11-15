import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Colors, EmailPattern, Fonts} from '../common';

export const EmailInput = () => {
  const [valid, setValid] = useState(false);

  return (
    <View style={styles.container}>
      <IconButton
        icon={'email-outline'}
        size={24}
        color={Colors.secondaryText}
        style={styles.emailIcon}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        keyboardType="email-address"
        cursorColor={Colors.primary}
        onChangeText={text => {
          if (EmailPattern.test(text)) {
            setValid(true);
          } else {
            setValid(false);
          }
        }}
      />
      {valid && (
        <IconButton
          icon={'check'}
          size={24}
          color={Colors.valid}
          style={styles.validIcon}
        />
      )}
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
  emailIcon: {
    marginStart: 16,
    alignSelf: 'center',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.SFRegular,
    fontWeight: '400',
  },
  validIcon: {
    alignSelf: 'center',
    marginEnd: 16,
  },
});
