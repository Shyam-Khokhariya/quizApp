import {Dimensions, StyleSheet} from 'react-native';
import {IColors} from '../../theme';

const screenWidth = Dimensions.get('screen').width;

export default (colors: IColors) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
    },
    titleText: {
      marginTop: 30,
      color: colors.white,
    },
    englishText: {
      marginTop: 30,
      fontSize: 30,
      fontWeight: '700',
      color: colors.white,
    },
    germanText: {
      marginTop: 30,
      fontSize: 30,
      marginHorizontal: 5,
      fontWeight: '700',
      color: colors.white,
    },
    germanContainer: {
      width: screenWidth,
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
      height: 90,
    },
    contentStyle: {
      marginTop: 50,
      width: screenWidth - 40,
      alignItems: 'center',
      textAlign: 'center',
    },
    optionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: colors.white,
      padding: 20,
      margin: 10,
      width: screenWidth / 3,
    },
    emptyOption: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: colors.buttonBackground,
      padding: 20,
      margin: 10,
      width: screenWidth / 3,
    },
    emptyContainer: {
      width: 75,
      height: 70,
      borderBottomWidth: 2,
      borderBottomColor: colors.white,
      marginHorizontal: 10,
    },
    bottomButtonContainer: {
      width: screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
    },
    buttonContainer: {
      margin: 20,
      marginTop: 80,
      width: screenWidth * 0.8,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.buttonBackground,
      padding: 20,
    },
    checkContainer: {
      margin: 20,
      marginTop: 80,
      width: screenWidth * 0.8,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.successBackground,
      padding: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.white,
    },
    completionContainer: {
      margin: 20,
      width: screenWidth * 0.8,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      padding: 20,
    },
    answerText: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.white,
      margin: 30,
      alignSelf: 'flex-start',
    },
    successText: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.successBackground,
    },
    errorText: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.failureBackground,
    },
  });
