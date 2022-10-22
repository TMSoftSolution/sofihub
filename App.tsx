/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView >
      <StatusBar
        barStyle='light-content'
      />

        <View style={styles.container}
         >
          <Text style={styles.styleHeader}>Hello</Text>
        </View>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#FFFF99',
    justifyContent: 'center'
    
  },
  styleHeader: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center'
  },
});

export default App;
