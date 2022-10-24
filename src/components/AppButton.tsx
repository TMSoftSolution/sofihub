import {Button, StyleSheet, View} from 'react-native';

export const AppButton = () => {
  return (
    <View>
      <Button title="Hello"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    color: 'red',
  },
});
