import { StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
    fontSize: 15,
    color: '#2F90FF',
    fontFamily: 'press-start',

    // backgroundColor: '#083CFF',
  },

  inputContainer: {
    width: '80%',
    maxWidth: '90%',
  },
  textInput: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#2764FF',
    textAlign: 'center',
    color: '#0DACF7',
    backgroundColor: '#0F53FF',
  },

  buttonContainer: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonConfirm: {
    width: '40%',
  },

  confirmText: {
    color: '#0FD0FD',
    paddingVertical: 10,
  },

  buttonReset: {
    width: '40%',
  },

  resetText: {
    paddingVertical: 10,
    color: '#F72896',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  submittedTitle: {
    color: colors.confirmText,
    fontSize: 22,
  },

  submittedCard: {
    marginTop: 10,
    elevation: 20,
  },
  submitValueButton: {
    marginTop: 10,
    paddingHorizontal: 5,
    backgroundColor: colors.yellow,
  },
  submitButtonText: {
    padding: 5,
    color: colors.confirmText,
  },
});
