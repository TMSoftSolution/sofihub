import * as React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

export const AppStatusBar = (props: any) => {
  const isFocused = useIsFocused();

  return (
    <StatusBar
      animated={true}
      hidden={false}
      translucent={true}
      backgroundColor="transparent"
      barStyle="dark-content"
      {...props}
    />
  );
};
