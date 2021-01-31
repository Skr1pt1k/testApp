import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

const Row = ({style, ...props}) => (
  <View
    style={[styles.row, props.centered && styles.centered, style]} {...props}
  />
);

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  }
});

Row.propTypes = {
  centered: PropTypes.bool
};

Row.defaultProps = {
  centered: null
};

export default Row;
