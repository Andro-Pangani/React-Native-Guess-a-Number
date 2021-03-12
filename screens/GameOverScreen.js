import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NumberComponent } from '../components/numberComponent';
import { colors } from '../Constants/colors';
import { ButtonWrapper } from '../customComponents/buttonWrapper';
import { Card } from '../customComponents/card';

export const GameOverScreen = ({ rounds, onGameOver, userNumber }) => {
  console.log(rounds, 'rounds');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game is over</Text>
      <Card>
        <Text style={styles.numberTitle}>Number was</Text>
        <NumberComponent style={styles.number} value={userNumber} />
        <View style={styles.guessesContainer}>
          <Text style={styles.guessNumber}>{rounds}</Text>
          <Text style={styles.guessText}>guesses</Text>
        </View>
        <ButtonWrapper onPress={onGameOver}>
          <Text style={styles.buttonText}>Start New Game</Text>
        </ButtonWrapper>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 8,
    color: colors.card_bg,
    backgroundColor: colors.confirmText,
    paddingHorizontal: 22,
    padding: 5,
    borderRadius: 5,
  },
  numberTitle: {
    color: 'white',
    marginBottom: 10,
  },
  number: {
    color: colors.confirmText,
    fontSize: 15,
    marginBottom: 10,
  },
  guessText: {
    color: colors.confirmText,
  },
  guessNumber: {
    color: 'white',
  },
  guessesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.confirmLight,
    borderRadius: 5,
    paddingHorizontal: 8,
    width: 100,
  },
  buttonText: {
    padding: 3,
    paddingHorizontal: 8,
  },
});
