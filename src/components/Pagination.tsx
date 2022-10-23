import {StyleSheet, View} from 'react-native';
import {Dot} from './Dot';

interface PaginationProps {
  index: number;
}
export const Pagination = ({index}: PaginationProps) => {
  return (
    <View style={styles.container}>
      <Dot focus={index == 0} />
      <Dot focus={index == 1} />
      <Dot focus={index == 2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    bottom: 154,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
