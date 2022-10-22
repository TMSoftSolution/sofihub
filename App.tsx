import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { TopNavigationBar } from './src/components/TopNavigationBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft'

library.add(faChevronLeft)

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
      <View style={styles.container}>
      <TopNavigationBar
        showBack={false}
        showSkip={false}
        onBack={(() => {})}
        onSkip={(() => {})}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});

export default App;
