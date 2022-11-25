import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';
import {Colors} from '../../common/AppStyle';
import {AppStatusBar, Pagination, TopNavigationBar} from '../../components';
import {Onboarding1, Onboarding2, Onboarding3} from './components';

type OnboardingNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Onboarding'
>;

export const Onboarding = ({navigation}: OnboardingNavigationProp) => {
  const [index, setIndex] = useState(0);

  const onNext = () => {
    if (index > 2) return;
    if (index == 2) {
      navigation.navigate('Welcome');
    } else {
      setIndex(index + 1);
    }
  };

  const onBack = () => {
    if (index < 0) return;
    setIndex(index - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppStatusBar />
      <View style={styles.containerInner}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInner: {
    flex: 1,
    width: '100%',
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
