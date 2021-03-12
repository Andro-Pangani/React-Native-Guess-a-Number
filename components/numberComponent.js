import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../Constants/colors';
export const NumberComponent = ({ value, style }) => {
  return (
    <View style={{ ...styles.numberContainer, ...style }}>
      <Text style={styles.numberText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.confirmText,
  },
  numberText: {
    color: 'white',
    fontSize: 28,
    paddingTop: 15,
    fontFamily: 'press-start',
  },
});
