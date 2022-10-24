import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';

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
      {
        <IconButton
          icon="chevron-left"
          style={styles.backIcon}
          size={36}
          color={'#A1A8B0'}
          onPress={() => {
            if (showBack) {
              onBack();
            }
          }}
        />
      }
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
    marginStart: 4,
    alignSelf: 'center',
  },
});
