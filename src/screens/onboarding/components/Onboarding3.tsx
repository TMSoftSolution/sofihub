import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Fonts, Images, window} from '../../../common';

export const Onboarding3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wecomeText}>
        Manage your device emergency contacts from your app
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={Images.bgOnboarding3}
          style={styles.image}
          resizeMode={'cover'}
        />
        <Image
          source={Images.imgOnboarding3}
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
  wecomeText: {
    fontFamily: Fonts.header,
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
    marginTop: 35,
    marginBottom: 20,
    marginLeft: 32,
    marginRight: 32,
  },
  image: {
    flex: 1,
    height: undefined,
    aspectRatio: 311 / 563,
  },
  image1: {
    flex: 1,
    position: 'absolute',
    width: window.width * 0.5,
    height: undefined,
    top: 78,
    aspectRatio: 1,
  },
});
