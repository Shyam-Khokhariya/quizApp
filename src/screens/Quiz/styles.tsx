import {StyleSheet} from 'react-native';
import {IColors} from '../../theme';

export default (colors: IColors) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.primary,
    },
    container: {
      flex: 1,
      marginTop: 80,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: colors.secondary,
    },
  });
