import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HeaderSection = ({ title }) => {
  return (
    <View style={styles.headerSection}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    position: 'relative',
    width: '100%',
    height: 90,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7287b',
  },
  headerTitle: {
    color: '#F7E640',
    fontSize: 20,
    fontFamily: 'press-start',
  },
});
