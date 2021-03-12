import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Card = ({ children, style }) => {
  return <View style={{ ...styles.view, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#1C60FF',
    borderColor: '#1A58EA',
  },
});
