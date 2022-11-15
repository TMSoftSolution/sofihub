import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, Images, window} from '../../../common';

export const Onboarding1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to Sofihub</Text>
      <Text style={styles.wecomeText}>Manage your connected all device</Text>
      <View style={styles.imageContainer}>
        <Image
          source={Images.bgOnboarding1}
          style={styles.image}
          resizeMode={'cover'}
        />
        <Image
          source={Images.imgOnboarding1}
          style={styles.image1}
          resizeMode={'cover'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcomeTitle: {
    fontFamily: Fonts.SFBold,
    fontWeight: '700',
    fontSize: 34,
    marginStart: 32,
    marginEnd: 32,
    color: Colors.primaryText,
  },
  wecomeText: {
    fontFamily: Fonts.SFBold,
    fontWeight: '700',
    fontSize: 24,
    marginStart: 32,
    marginEnd: 32,
    color: Colors.primaryText,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    flex: 1,
    height: undefined,
    aspectRatio: 311 / 563,
  },
  image1: {
    flex: 1,
    position: 'absolute',
    width: window.width * 0.6,
    height: undefined,
    top: 28,
    aspectRatio: 251 / 332,
  },
});
