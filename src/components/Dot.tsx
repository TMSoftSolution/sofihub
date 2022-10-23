import {StyleSheet, View} from 'react-native';
import {Colors} from '../AppStyle';

interface DotProps {
  focus: boolean;
}
export const Dot = ({focus}: DotProps) => {
  return <View style={[styles.container, {opacity: focus ? 1 : 0.3}]}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: 12,
    borderRadius: 2,
    marginHorizontal: 4,
    backgroundColor: Colors.primary,
  },
});
