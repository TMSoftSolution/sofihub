import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../../App';
import {Images} from '../../common';

type SignUpSuccessProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpSuccess = ({navigation}: SignUpSuccessProps) => {
  return (
    <View style={styles.container}>
      <Image source={Images.imgSignUpSuccess} style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
