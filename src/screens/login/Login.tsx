import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {TopNavigationBar} from '../../components';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = ({navigation}: LoginProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TopNavigationBar
          title="Login"
          showBack={true}
          onBack={navigation.pop}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
