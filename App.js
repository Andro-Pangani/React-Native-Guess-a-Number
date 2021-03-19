import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { HeaderSection } from './components/HeaderSection';
import { GameScreenComponent } from './screens/GameScreen';
import { StartGameScreen } from './screens/StartGameScreen';

import { GameOverScreen } from './screens/GameOverScreen';

//Fonts
import { useFonts } from 'expo-font';

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameRounds, setGameRounds] = useState(0);

  //App Loading ... setup

  const [isLoaded] = useFonts({
    'press-start': require('./assets/fonts/PressStart2P-Regular.ttf'),
  });

  const handleGameStart = (number) => {
    setUserNumber(number);
    setGameRounds(0);
  };

  const gameOverHandler = (numOfRounds) => {
    setGameRounds(numOfRounds);
  };

  const restartGame = () => {
    setUserNumber(null);
    setGameRounds(0);
  };

  const exitGameHandler = () => {
    setUserNumber(null);
  };

  let content = <StartGameScreen handleGameStart={handleGameStart} />;

  if (!isLoaded) {
    console.log(isLoaded, 'fontsLoaded');
    return <AppLoading />;
    // return null;
  } else if (userNumber && gameRounds == 0) {
    content = (
      <GameScreenComponent
        userChoice={userNumber}
        onGameOver={gameOverHandler}
        exitGameHandler={exitGameHandler}
      />
    );
  } else if (gameRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={gameRounds}
        onGameOver={restartGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <HeaderSection title={'Guess a Number'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#1B5DF7',
  },
});
