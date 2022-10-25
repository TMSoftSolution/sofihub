import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors, Images} from '../../AppStyle';
import {
  TextButton,
  OutlinedButton,
  PrimaryButton,
  Spacer,
  LocationButton,
} from '../../components';
import {window} from '../../Utilties';

export const Welcome = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerInner}>
        <Image
          source={Images.bgWelcome}
          style={styles.bgWelcome}
          resizeMode={'cover'}
        />
        <View style={styles.contentContainer}>
          <Image
            source={Images.logoWithBrand}
            style={styles.logoWithBrand}
            resizeMode={'cover'}
          />
          <Image
            source={Images.welcomeLogo}
            style={styles.welcomeLogo}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            text="Login"
            onClick={() => {
              console.log('button clicked');
            }}
          />
          <Spacer space={16} />
          <OutlinedButton
            text="Sign Up"
            onClick={() => {
              console.log('button clicked');
            }}
          />
          <Spacer space={38} />
          <TextButton text="Need help?" onClick={() => {}} />
          <Spacer space={16} />
          <LocationButton
            location="Australia"
            onClick={() => {
              console.log('button clicked');
            }}
          />
          <Spacer space={16} />
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
    backgroundColor: Colors.secondaryBackground,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  logoWithBrand: {
    marginTop: 18,
    width: window.width * 0.6,
    height: undefined,
    aspectRatio: 257 / 133,
  },
  welcomeLogo: {
    marginTop: 29,
    width: window.width * 0.6,
    height: undefined,
    aspectRatio: 257 / 179,
  },
  bgWelcome: {
    position: 'absolute',
    width: window.width,
    height: undefined,
    aspectRatio: 375 / 526,
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 36,
    paddingHorizontal: 32,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginHorizontal: 16,
  },
});
