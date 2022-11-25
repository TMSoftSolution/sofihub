import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';
import {Colors, Fonts, Images, window} from '../../common';
import {PrimaryButton, Spacer} from '../../components';

type SignUpSuccessProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpSuccess'
>;

const height = (443 * window.width) / 375.0;

export const SignUpSuccess = ({route, navigation}: SignUpSuccessProps) => {
  const {name} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image source={Images.imgSignUpSuccess} style={styles.image}></Image>
        <Spacer space={16} />
        <Text style={styles.title}>Welcome {name}!</Text>
        <Spacer space={8} />
        <Text style={styles.subTitle}>Let's get you set up</Text>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            text="NEXT"
            onClick={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: height,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  title: {
    color: Colors.primaryText,
    fontFamily: Fonts.SFBold,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  subTitle: {
    color: Colors.secondaryText,
    fontFamily: Fonts.SFRegular,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  bottomContainer: {
    paddingHorizontal: 16,
    marginTop: 64,
    justifyContent: 'flex-end',
  },
});
