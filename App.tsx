import React from 'react';
import {StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
import Quiz from './src/screens/Quiz';
import {NavigationContainer} from '@react-navigation/native';
import {Theme} from './src/theme';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.safeAreaContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={Theme}>
        <Quiz />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
