import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const Loader = () => (
  <ActivityIndicator style={styles.loader} size="large" />
);

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Loader;
