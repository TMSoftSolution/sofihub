import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Colors, Fonts} from '../common';

export const PasswordInput = () => {
  const [show, setShow] = useState(false);

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
