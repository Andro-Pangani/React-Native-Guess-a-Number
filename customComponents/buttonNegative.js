import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../Constants/colors';

export const ButtonNegative = ({ style, onPress, title }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
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
    color: colors.red,
  },
});
