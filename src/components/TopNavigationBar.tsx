import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {Colors} from '../AppStyle';

interface TopNavigationBarProps {
  showBack?: boolean;
  showSkip?: boolean;
  onBack: Function | null;
  onSkip: Function | null;
}

export const TopNavigationBar = ({
  showBack,
  showSkip,
  onBack,
  onSkip,
}: TopNavigationBarProps) => {
  return (
    <View style={styles.container}>
      {showBack && (
        <IconButton
          icon="chevron-left"
          style={styles.backIcon}
          size={36}
          color={Colors.secondaryText}
          onPress={() => {
            if (showBack && onBack) {
              onBack();
            }
          }}
        />
      )}
      <View />
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
  },
  skipText: {
    alignSelf: 'flex-end',
    color: Colors.secondaryText,
    marginEnd: 24,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SFPRODISPLAY-BOLD',
  },
  backIcon: {
    marginStart: 4,
    alignSelf: 'center',
  },
});
