import {SafeAreaView, StyleSheet} from 'react-native';

export const Welcome = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yello',
  },
});