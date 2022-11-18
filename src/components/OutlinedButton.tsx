import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Colors, Fonts} from '../common/AppStyle';

interface OutlinedButtonProps {
  text: string;
  onClick: (() => void) | undefined;
}

export const OutlinedButton = ({text, onClick}: OutlinedButtonProps) => {
  return (
    <Button
      uppercase={false}
      mode="outlined"
      color="white"
      onPress={onClick}
      style={styles.button}
      contentStyle={styles.buttonContent}
      labelStyle={styles.buttonLabel}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: '100%',
    borderRadius: 28,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: Fonts.SFSemiBold,
  },
});
