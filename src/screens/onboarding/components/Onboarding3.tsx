import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Images} from '../../../AppStyle';

export const Onboarding3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wecomeText}>
        Manage your device emergency contacts from your app
      </Text>
      <View style={styles.imageContainer}>
        <Image source={Images.bgOnboarding3} style={styles.image} />
        <Image source={Images.imgOnboarding3} style={styles.image1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wecomeText: {
    fontFamily: 'SFPRODISPLAY-BOLD',
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
  },
  image1: {
    flex: 1,
    position: 'absolute',
    top: 100,
  },
});
