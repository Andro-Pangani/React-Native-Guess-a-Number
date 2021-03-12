import { StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    // width: '80%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.card_bg,
  },
  exitButton: {
    paddingHorizontal: 10,
  },
  exitTitle: {
    padding: 5,
    color: '#C7DAE1',
  },
  title: {
    color: colors.confirmText,
    fontSize: 18,
    marginTop: 20,
  },

  number: {
    marginTop: 15,
  },

  card: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  guessList: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card_bg,
    height: '30%',
    marginTop: 10,
    paddingHorizontal: 5,
  },

  listItem: {
    marginVertical: 8,
    padding: 5,
    backgroundColor: 'rgba(0,84,255,1)',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'press-start',
    paddingTop: 5,
    fontSize: 15,
    color: 'white',
  },
});
