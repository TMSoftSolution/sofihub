import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

interface TopNavigationBarProps {
  showBack?: boolean;
  showSkip?: boolean;
  onBack: Function;
  onSkip: Function;
}

export const TopNavigationBar = ({
  showBack,
  showSkip,
  onBack,
  onSkip,
}: TopNavigationBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => {
          if (showBack) {
            onBack();
          }
        }}>
        {showBack && (
          <FontAwesomeIcon
            icon="chevron-left"
            style={styles.backIcon}
            size={24}
            color={'#A1A8B0'}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={{justifyContent: 'center'}}
        onPress={() => {
          if (showSkip) {
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
    color: '#A1A8B0',
    marginEnd: 24,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SFPRODISPLAY-BOLD',
  },
  backIcon: {
    marginStart: 24,
  },
});
