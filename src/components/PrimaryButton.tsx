import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Colors} from '../AppStyle';

interface PrimaryButtonProps {
  text: string;
  onClick: (() => void) | undefined;
}

export const PrimaryButton = ({text, onClick}: PrimaryButtonProps) => {
  return (
    <Button
      uppercase={false}
      mode="contained"
      color={Colors.primary}
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
  },
  buttonContent: {
    height: 56,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'SFPRODISPLAY-SEMIBOLD',
  },
});
