import { StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bgImage: {
    height: '100%',
    maxWidth: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    marginVertical: 20,
    fontSize: 15,
    color: colors.confirmText,
    fontFamily: 'press-start',

    // backgroundColor: '#083CFF',
  },

  inputContainer: {
    width: '80%',
    maxWidth: '90%',
    backgroundColor: 'rgba(218,24,24,.5)',
    borderColor: colors.red,
    borderRadius: 2,
  },
  textInput: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 2,
    fontSize: 28,
    borderColor: 'rgba(29,32,33,.5)',
    textAlign: 'center',
    color: '#0DACF7',
    backgroundColor: 'rgba(29,32,33,.5)',
  },

  buttonContainer: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonConfirm: {
    width: '40%',
    backgroundColor: 'rgba(13,80,11,.5)',
  },

  confirmText: {
    color: 'orange',
    paddingVertical: 10,
    fontFamily: 'press-start',
    fontSize: 10,
  },

  buttonReset: {
    width: '40%',
    backgroundColor: 'rgba(95,5,5,.5)',
  },

  resetText: {
    paddingVertical: 10,
    color: '#F72896',
    fontFamily: 'press-start',
    fontSize: 10,
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
