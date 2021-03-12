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
});
