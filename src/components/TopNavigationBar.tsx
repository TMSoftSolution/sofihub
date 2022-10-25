import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {backIcon} from '../common';
import {Colors, Fonts} from '../common/AppStyle';

interface TopNavigationBarProps {
  showBack?: boolean;
  showSkip?: boolean;
  onBack?: Function | undefined;
  onSkip?: Function | undefined;
  title?: string;
}

export const TopNavigationBar = ({
  title,
  showBack,
  showSkip,
  onBack,
  onSkip,
}: TopNavigationBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {showBack && (
        <IconButton
          icon={backIcon}
          style={styles.backIcon}
          color={Colors.secondaryText}
          onPress={() => {
            if (showBack && onBack) {
              onBack();
            }
          }}
        />
      )}
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => {
          if (showSkip && onSkip) {
            onSkip();
          }
        }}>
        {showSkip && <Text style={styles.skipText}>Skip</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  skipText: {
    alignSelf: 'flex-end',
    color: Colors.secondaryText,
    marginEnd: 10,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SFPRODISPLAY-BOLD',
  },
  backIcon: {
    marginStart: 10,
    alignSelf: 'center',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    color: Colors.primaryText,
    fontFamily: Fonts.header,
    fontSize: 18,
    fontWeight: '700',
    alignSelf: 'center',
  },
});
