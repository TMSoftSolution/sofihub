import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Colors} from '../common';

export const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.loaderBackground,
      }}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};
