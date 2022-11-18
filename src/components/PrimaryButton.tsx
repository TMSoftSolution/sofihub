import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Colors, Fonts} from '../common/AppStyle';

interface PrimaryButtonProps {
  text: string;
  onClick: (() => void) | undefined;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <Button
      uppercase={false}
      mode="contained"
      color={Colors.primary}
      onPress={props.onClick}
      style={styles.button}
      contentStyle={styles.buttonContent}
      labelStyle={styles.buttonLabel}>
      {props.text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: '100%',
    borderRadius: 28,
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.SFSemiBold,
  },
});
