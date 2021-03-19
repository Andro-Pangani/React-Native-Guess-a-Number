import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export const HeaderSection = ({ title }) => {
  return (
    <View style={styles.headerSection}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    position: 'absolute',
    width: '100%',
    height: 50,
    paddingTop: Dimensions.get('window').height / 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(235,9,50,0)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    top: 25,
    zIndex: 2,
  },
  headerTitle: {
    color: 'rgba(247,230,64,1)',
    fontSize: 20,
    fontFamily: 'press-start',
  },
});
