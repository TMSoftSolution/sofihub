import {Pressable, StyleSheet, View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {Colors} from '../AppStyle';

interface LocationButtonProps {
  location: string;
  onClick: (() => void) | undefined;
}

export const LocationButton = ({location, onClick}: LocationButtonProps) => {
  return (
    <Pressable onPress={onClick} style={styles.container}>
      <View>
        <Text style={styles.text}>Default Location</Text>
      </View>
      <View style={styles.locationContainer}>
        <IconButton
          icon={'map-marker-outline'}
          color={Colors.primary}
          style={styles.locationIcon}
        />
        <Text style={styles.locationText}>{location}</Text>
        <IconButton
          icon={'chevron-down'}
          color={Colors.secondaryText}
          style={styles.locationIcon}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 72,
    width: '100%',
    borderRadius: 16,
    borderColor: Colors.primaryBorder,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
  text: {
    color: Colors.secondaryText,
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'SFPRODISPLAY-REGULAR',
    marginTop: 12,
  },
  locationText: {
    flex: 1,
    color: '#101623',
    fontSize: 16,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    margin: 0,
    marginStart: -8,
    padding: 0,
  },
  dropdownIcon: {
    alignItems: 'flex-end',
  },
});
