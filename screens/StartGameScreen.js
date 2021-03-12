import React, { useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from 'react-native';
import { NumberComponent } from '../components/numberComponent';
import { colors } from '../Constants/colors';
import { ButtonWrapper } from '../customComponents/buttonWrapper';
import { Card } from '../customComponents/card';
import { Input } from '../customComponents/inputText';
import { styles } from './StartGameScreen.styles';

export const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const [submitedValue, setSubmitedValue] = useState('');

  const [confirmed, setConfirmed] = useState(false);

  const handleEnteredNumber = (inputText) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
    setSubmitedValue('');
    setConfirmed(false);
  };

  //switches between screens
  const handleStartGame = () => {
    props.handleGameStart(submitedValue);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid input !',
        'Number has to be a number between 1 and 99.',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    setEnteredNumber('');
    setConfirmed(true);
    setSubmitedValue(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedValue;

  if (confirmed) {
    confirmedValue = (
      <View style={styles.summaryContainer}>
        <Text style={styles.submittedTitle}>Confirmed number is:</Text>
        <Card style={styles.submittedCard}>
          <NumberComponent value={submitedValue} />
          <ButtonWrapper
            onPress={handleStartGame}
            style={styles.submitValueButton}
          >
            <Text style={styles.submitButtonText}>Start Game</Text>
          </ButtonWrapper>
        </Card>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Image
          source={require('../assets/cyberpank.jpg')}
          style={styles.bgImage}
        />
        <Text style={styles.title}>Start New Game</Text>
        <Card style={styles.inputContainer}>
          <Input
            style={styles.textInput}
            blurOnSubmit
            autoCapitalize="none"
            keyboardType="number-pad"
            maxLength={2}
            placeholder="..."
            placeholderTextColor={colors.confirmText}
            onChangeText={handleEnteredNumber}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <ButtonWrapper
              style={styles.buttonReset}
              onPress={resetInputHandler}
            >
              {/* <TouchableOpacity onPress={resetInputHandler}> */}
              <Text style={styles.resetText}>Reset</Text>
              {/* </TouchableOpacity> */}
            </ButtonWrapper>
            <ButtonWrapper
              style={styles.buttonConfirm}
              onPress={confirmInputHandler}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </ButtonWrapper>
          </View>
        </Card>
        {confirmedValue}
      </View>
    </TouchableWithoutFeedback>
  );
};
