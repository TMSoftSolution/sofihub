import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {Colors} from '../../AppStyle';
import {Pagination, TopNavigationBar} from '../../components';
import {Onboarding1, Onboarding2, Onboarding3} from './components';

export const Onboarding = () => {
  const [index, setIndex] = useState(0);

  const onNext = () => {
    if (index >= 2) return;
    setIndex(index + 1);
  };

  const onBack = () => {
    if (index < 0) return;
    setIndex(index - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar
        showSkip={true}
        showBack={index != 0}
        onBack={onBack}
        onSkip={() => {
          console.log('skip pressed');
        }}
      />
      {index == 0 && <Onboarding1 />}
      {index == 1 && <Onboarding2 />}
      {index == 2 && <Onboarding3 />}
      <View style={styles.actionContainer}>
        <Pagination index={index} />
        <FAB
          icon={index != 2 ? 'arrow-right' : ''}
          color="white"
          label={index == 2 ? '              DONE              ' : ''}
          style={styles.nextButton}
          onPress={onNext}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionContainer: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  nextButton: {
    position: 'absolute',
    borderRadius: 28,
    backgroundColor: Colors.primary,
    bottom: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
