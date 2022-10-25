import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {Colors} from '../common/AppStyle';

interface TextButtonProps {
  text: string;
  onClick: (() => void) | undefined;
}

export const TextButton = ({text, onClick}: TextButtonProps) => {
  return (
    <Button
      uppercase={false}
      mode="text"
      color="white"
      onPress={onClick}
      style={styles.button}
      labelStyle={styles.buttonLabel}>
      {text}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    borderColor: Colors.primary,
  },
  buttonLabel: {
    color: Colors.primary,
    fontFamily: 'SFPRODISPLAY-MEDIUM',
    fontSize: 16,
    fontWeight: '500',
  },
});
