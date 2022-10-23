import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../AppStyle';
import {TopNavigationBar} from '../../components';
import {Onboarding1, Onboarding2, Onboarding3} from './components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

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
    <View style={styles.container}>
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
        <TouchableOpacity style={styles.nextButton} onPress={onNext}>
          <FontAwesomeIcon icon="arrow-right" size={24} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  nextButton: {
    position: 'absolute',
    borderRadius: 28,
    backgroundColor: Colors.primary,
    width: 56,
    height: 56,
    bottom: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
