import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NumberComponent } from '../components/numberComponent';
import { ButtonPositive } from '../customComponents/buttonPositive';
import { ButtonNegative } from '../customComponents/buttonNegative';
import { Card } from '../customComponents/card';
import { styles } from './GameScreen.styles';
import { LinearGradient } from 'expo-linear-gradient';
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
      <LinearGradient
        style={styles.screen_bg}
        colors={['rgba(247,230,64,1)', 'rgba(24,21,33,.8)']}
      ></LinearGradient>
      <Card style={styles.card_body}>
        <TouchableOpacity onPress={exitGameHandler.bind(this)}>
          <LinearGradient
            colors={[
              'rgba(255,239,92,.1)',
              'rgba(255,239,92,.1)',
              'rgba(255,239,92,.1)',
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.exitButton}
          >
            <Text style={styles.exitTitle}>Exit</Text>
          </LinearGradient>
        </TouchableOpacity>
        {/* <Text style={styles.guess_title}>
          Guess:<Text style={styles.guess_count}>{guessRounds}</Text>
        </Text> */}
        {/* <View style={styles.number_container}> */}
        <NumberComponent style={styles.number}>
          <LinearGradient
            colors={['rgba(64,122,247,.3)', 'rgba(64,122,247,.2)']}
            style={styles.number_dash_left}
          ></LinearGradient>
          <LinearGradient
            colors={[
              'rgba(64,122,247,.3)',
              // 'rgba(56,56,56,.6)',
              // 'rgba(56,56,56,.4)',
              'rgba(64,122,247,.2)',
            ]}
            style={styles.number_dash_right}
          ></LinearGradient>
          <View style={styles.number_value_container}>
            <Text style={styles.number_value_shadow}>{currentGuess}</Text>
            <Text style={styles.numberValue}>{currentGuess}</Text>
          </View>
        </NumberComponent>

        <Card style={styles.card}>
          <ButtonPositive
            style={styles.btn_greater}
            onPress={nextGuessHandler.bind(this, 'GREATER')}
            title={'GREATER'}
          />
          <ButtonNegative
            style={styles.btn_lower}
            onPress={nextGuessHandler.bind(this, 'LOWER')}
            title={'LOWER'}
          />
        </Card>
      </Card>
      <View style={styles.guessList}>
        <LinearGradient
          colors={['rgba(86,77,247,0)', 'rgba(247,68,92,0)']}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          style={styles.list_bg}
        ></LinearGradient>
        {/* <LinearGradient
          colors={['rgba(247,114,172,0.2)', 'rgba(247,68,92,0)']}
          style={styles.list_lamp}
        ></LinearGradient> */}
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {allGuesses.map((guess, index) => (
            <ListItem guess={guess} index={index} key={guess} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const ListItem = ({ guess, index }) => {
  let active = index === 0;
  let color = active ? 'rgba(247,230,64,.6)' : 'rgba(120,111,31,.7)';
  let bgColor = active ? 'rgba(20,32,56,0)' : 'rgbargba(89,139,247,0)';

  const activeNumber = useRef(new Animated.Value(0)).current;

  const otherNumbers = useRef(new Animated.Value(0)).current;

  const fade1 = () => {
    Animated.timing(activeNumber, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start(() => fade2());
  };

  const fade2 = () => {
    Animated.timing(activeNumber, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => fade3());
  };

  const fade3 = () => {
    Animated.timing(activeNumber, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const activeNumberFade = () => {
    fade1();
    fade2();
    fade3();
  };

  useEffect(() => {
    if (active) {
      fade1();
      fade2();
      fade3();
    }
  });

  console.log(index, 'Rendered < > item', otherNumbers);

  return (
    <Animated.View
      style={{
        ...styles.listItem,
        backgroundColor: bgColor,
        opacity: activeNumber,
      }}
    >
      <Text style={{ ...styles.text, color: color }}>{guess}</Text>
    </Animated.View>
  );
};
