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
  title_container: {
    backgroundColor: 'black',
    width: '70%',
    borderColor: 'rgba(15, 208, 253, 0.2)',
  },
  title: {
    marginVertical: 20,
    fontSize: 12,
    textAlign: 'center',
    color: 'rgba(15, 208, 253,1)',
    fontFamily: 'press-start',

    // backgroundColor: '#083CFF',
  },

  inputContainer: {
    width: '70%',
    maxWidth: '90%',
    backgroundColor: 'rgba(235,9,50,0)',
    borderColor: 'rgba(15, 208, 253, 0.4)',
    borderTopWidth: 0,
    borderRadius: 2,
    // borderWidth: 2,
  },

  textInput: {
    width: '35%',
    // height: 70,
    // borderRadius: 100,
    borderWidth: 1,
    fontSize: 20,
    paddingTop: 20,
    fontFamily: 'press-start',
    borderColor: 'rgba(15, 208, 253, 0.2)',
    textAlign: 'center',
    color: 'rgb(115, 208, 253)',
    backgroundColor: 'rgba(0,0,0,.8)',
    borderRadius: 3,
  },

  buttonContainer: {
    width: '90%',
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonConfirm: {
    width: '40%',
    backgroundColor: 'rgba(0,0,0,.9)',
    borderColor: 'rgba(45,79,235, 0)',
    borderWidth: 1,
    borderRadius: 3,
  },

  confirmText: {
    color: 'rgb(235,235,56)',
    paddingVertical: 8,
    fontFamily: 'press-start',
    fontSize: 8,
    paddingTop: 10,
  },

  buttonReset: {
    width: '40%',
    backgroundColor: 'rgba(0,0,0,.8)',
    borderColor: 'rgba(15, 208, 253, 0.2)',
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 3,
    elevation: 0,
  },

  buttonReset2: {
    marginTop: 10,
    width: 100,
    backgroundColor: 'black',
    borderColor: 'rgba(171,36,94,.5)',
    paddingVertical: 10,
    paddingTop: 12,
    paddingBottom: 8,
    borderWidth: 1,
  },

  resetText: {
    paddingVertical: 8,
    color: 'rgb(254,226,254)',
    fontFamily: 'press-start',
    fontSize: 8,
    paddingTop: 10,
  },
  resetText2: {
    color: 'rgba(171,36,94,1)',
    fontFamily: 'press-start',
    fontSize: 8,
  },
  summaryContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  submittedTitle: {
    color: 'rgba(89,139,247,1)',
    fontFamily: 'press-start',
    maxWidth: '40%',
    textAlign: 'center',
    fontSize: 14,
  },

  submittedCard: {
    marginTop: 10,
    elevation: 20,
    backgroundColor: 'rgba(46,10,171,.1)',
    borderWidth: 1,
    borderColor: 'rgba(9,140,235,.4)',
    // width: '50%',
  },
  numberCard: {
    backgroundColor: 'rgba(77,130,247,1)',
    borderColor: 'black',
  },
  numberValue: {
    fontFamily: 'press-start',
    color: 'black',
    fontSize: 24,
    paddingTop: 15,
  },
  submitValueButton: {
    width: 100,
    marginTop: 10,
    borderColor: 'rgba(9,140,235,.5)',
    backgroundColor: 'black',
    borderWidth: 1,
  },
  submitButtonText: {
    paddingVertical: 8,
    color: 'white',
    fontSize: 8,
    paddingTop: 12,
    textAlign: 'center',
    fontFamily: 'press-start',
  },
});
