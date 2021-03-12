import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../Constants/colors';

export const ButtonPositive = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    elevation: 10,
    backgroundColor: '#0851FF',
    borderColor: 'blue',
  },

  text: {
    fontSize: 10,
    color: colors.confirmText,
  },
});
