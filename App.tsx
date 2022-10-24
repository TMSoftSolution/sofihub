import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Onboarding} from './src/screens/onboarding/Onboarding';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Onboarding />;
};

export default App;
