import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {Onboarding} from './src/screens/onboarding/Onboarding';

library.add(faArrowRight, faChevronLeft);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Onboarding />;
};

export default App;
