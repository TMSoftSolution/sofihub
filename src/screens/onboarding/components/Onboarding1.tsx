import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors, Images} from '../../../AppStyle';

export const Onboarding1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Welcome to Sofihub</Text>
      <Text style={styles.wecomeText}>Manage your connected all device</Text>
      <View style={styles.imageContainer}>
        <Image source={Images.bgOnboarding1} style={styles.image} />
        <Image source={Images.imgOnboarding1} style={styles.image1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeTitle: {
    fontFamily: 'SFPRODISPLAY-BOLD',
    fontWeight: '700',
    fontSize: 34,
    marginStart: 32,
    marginEnd: 32,
    color: Colors.primaryText,
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
    marginTop: 20,
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
    top: 26,
  },
});
