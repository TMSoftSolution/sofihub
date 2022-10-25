import {View} from 'react-native';

interface SpacerProps {
  space?: number;
}
export const Spacer = ({space}: SpacerProps) => {
  return <View style={{marginTop: space}}></View>;
};
