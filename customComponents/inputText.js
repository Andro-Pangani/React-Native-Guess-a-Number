import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    padding: 5,
    borderRadius: 8,
  },
});
