import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NumberComponent } from '../components/numberComponent';
import { colors } from '../Constants/colors';
import { ButtonWrapper } from '../customComponents/buttonWrapper';
import { Card } from '../customComponents/card';

export const GameOverScreen = ({ rounds, onGameOver, userNumber }) => {
  return (
    <View style={styles.screen}>
      <Card style={styles.cardStyles}>
        <Text style={styles.numberTitle}>Number was</Text>
        <NumberComponent style={styles.number}>
          <Text style={styles.number}>{userNumber}</Text>
        </NumberComponent>
      </Card>
      <View style={styles.guessesContainer}>
        <Text style={styles.title}>The Game is over in</Text>
        <Text style={styles.guessNumber}>{rounds}</Text>
        <Text style={styles.guessText}>guesses</Text>
      </View>
      <ButtonWrapper style={styles.newGame} onPress={onGameOver}>
        <Text style={styles.buttonText}>New Game</Text>
      </ButtonWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    color: 'rgba(56,183,235,1)',
    fontFamily: 'press-start',
    textAlign: 'center',
    lineHeight: 15,
    fontSize: 10,
    borderRadius: 5,
  },
  cardStyles: {
    backgroundColor: 'rgba(89,139,247,.1)',
    borderColor: 'rgba(56,183,235,.2)',
  },
  numberTitle: {
    color: 'rgba(56,183,235,1)',
    fontFamily: 'press-start',
    marginBottom: 10,
    fontSize: 14,
  },
  number: {
    color: 'rgba(56,183,235,1)',
    fontSize: 28,
    paddingTop: 10,
    marginBottom: 10,
    borderColor: 'rgba(38,60,158,.2)',
    fontFamily: 'press-start',
  },
  guessText: {
    color: 'rgba(56,183,235,1)',
    fontFamily: 'press-start',
    fontSize: 10,
    paddingBottom: 10,
  },

  guessNumber: {
    color: 'rgba(77,130,247,1)',
    fontFamily: 'press-start',
    fontSize: 10,
    backgroundColor: 'rgba(28,96,255,.1)',
    borderRadius: 3,
    paddingTop: 10,
    marginBottom: 5,
  },
  guessesContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    width: '55%',
    // backgroundColor: 'gray',
    padding: 15,
    marginTop: 45,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    borderRadius: 5,
  },
  newGame: {
    backgroundColor: 'rgba(77,130,247,1)',
    paddingVertical: 5,
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    padding: 3,
    paddingHorizontal: 10,
    paddingTop: 8,
    color: 'rgba(235,225,33,1)',
    fontSize: 10,
    fontFamily: 'press-start',
  },
});
