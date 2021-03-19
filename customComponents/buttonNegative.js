import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../Constants/colors';

export const ButtonNegative = ({ style, onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.container, ...style }}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#0851FF',
    borderColor: 'blue',
    // overflow: 'hidden',
  },

  text: {
    fontSize: 6,
    paddingTop: 5,
    color: 'rgba(247,230,64,.6)',
    fontFamily: 'press-start',
  },

  artborder: {
    width: '140%',
    height: '190%',
    borderRadius: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(219,25,255,.1)',
    borderColor: 'red',
    borderWidth: 1,
    borderRightWidth: 0,
  },
});
