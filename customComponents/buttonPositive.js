import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../Constants/colors';

export const ButtonPositive = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.container, ...props.style }}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
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
    // borderRightColor: 'rgba(89,222,247,1)',
    borderRightColor: 'white',
  },

  text: {
    fontSize: 6,
    fontFamily: 'press-start',
    color: 'rgba(182,252,53,.6)',
    paddingTop: 5,
  },
});
