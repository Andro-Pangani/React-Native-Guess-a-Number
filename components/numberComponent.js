import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { colors } from '../Constants/colors';
export const NumberComponent = ({ style, children }) => {
  let first = {
    borderColor: 'rgba(212,9,235,.4)',
    borderTopColor: 'rgba(255,42,0,.6)',
    borderBottomColor: 'rgba(212,9,235,.3)',
  };
  // const animation = useRef(new Animated.Value(first)).current;

  useEffect(() => {
    // Animated.timing(animation, {
    //   toValue: {
    //     borderColor: 'rgba(212,9,235,.2)',
    //     borderTopColor: 'rgba(255,42,0,.3)',
    //     borderBottomColor: 'rgba(212,9,235,.1)',
    //   },
    //   duration: 500,
    //   useNativeDriver: true,
    // }).start();
  });

  return (
    <View style={{ ...styles.numberContainer, ...style }}>{children}</View>
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
});
