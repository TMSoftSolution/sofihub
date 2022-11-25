import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';
import {Header} from '../../components';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: HomeProps) => {
  return (
    <SafeAreaView>
      <Header />
    </SafeAreaView>
  );
};
