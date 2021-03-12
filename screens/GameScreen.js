import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { NumberComponent } from '../components/numberComponent';
import { ButtonPositive } from '../customComponents/buttonPositive';
import { ButtonNegative } from '../customComponents/buttonNegative';
import { Card } from '../customComponents/card';
import { styles } from './GameScreen.styles';
import { ButtonWrapper } from '../customComponents/buttonWrapper';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

// Game Screen Components
export const GameScreenComponent = ({
  userChoice,
  onGameOver,
  exitGameHandler,
}) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGues] = useState(initialGuess);

  const [allGuesses, setAllGuesses] = useState([initialGuess]);
  const [guessRounds, setGuesRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess == userChoice) {
      onGameOver(guessRounds);
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === 'LOWER' && currentGuess < userChoice) ||
      (direction === 'GREATER' && currentGuess > userChoice)
    ) {
      Alert.alert("Dont't paly with me Boooy", 'you', [
        { text: "Let's go!", style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'LOWER') {
      currentHigh.current = currentGuess;
    } else if (direction === 'GREATER') {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGues(nextNumber);
    setAllGuesses((guesses) => [[nextNumber], ...guesses]);
    setGuesRounds((currentRounds) => setGuesRounds(currentRounds + 1));
  };

  return (
    <View style={styles.screen}>
      <Card>
        <ButtonWrapper
          style={styles.exitButton}
          onPress={exitGameHandler.bind(this)}
        >
          <Text style={styles.exitTitle}>Exit</Text>
        </ButtonWrapper>
        <Text style={styles.title}>Guess: {guessRounds}</Text>
        <NumberComponent style={styles.number} value={currentGuess} />
        <Card style={styles.card}>
          <ButtonNegative
            onPress={nextGuessHandler.bind(this, 'LOWER')}
            title={'LOWER'}
          />
          <ButtonPositive
            onPress={nextGuessHandler.bind(this, 'GREATER')}
            title={'GREATER'}
          />
        </Card>
      </Card>
      <View style={styles.guessList}>
        <ScrollView>
          {allGuesses.map((guess, index) => (
            <ListItem guess={guess} index={index} key={guess} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const ListItem = ({ guess, index }) => {
  let color = index === 0 ? 'yellow' : 'white';

  return (
    <View style={styles.listItem}>
      <Text style={{ ...styles.text, color: color }}>{guess}</Text>
    </View>
  );
};
