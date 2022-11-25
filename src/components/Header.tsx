import {Image, StyleSheet, View} from 'react-native';
import {Badge, IconButton} from 'react-native-paper';
import {Colors, Images} from '../common';

const logoWidth = (163 * 72) / 83;

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.logo} />
      <View style={styles.leftContainer}>
        <View>
          <IconButton
            style={styles.notification}
            icon={'bell-outline'}
            size={24}
            color={Colors.primaryText}
            onPress={() => {}}
          />
          <Badge style={styles.badge}>2</Badge>
        </View>
        <IconButton
          style={styles.profile}
          icon={'account-outline'}
          size={24}
          color={Colors.primaryText}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingStart: 24,
    paddingEnd: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    height: 72,
    width: logoWidth,
  },
  notification: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: Colors.primaryBorder,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: Colors.primaryBorder,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: -4,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    backgroundColor: '#FF5C5C',
    color: 'white',
  },
});
