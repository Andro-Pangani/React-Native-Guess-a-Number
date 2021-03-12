import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const ButtonWrapper = ({ children, style, onPress }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: '#0851FF',
    borderColor: 'blue',
  },
});
