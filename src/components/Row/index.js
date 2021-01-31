import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

const Row = ({style, ...props}) => (
  <View
    style={[styles.row, props.centered && styles.centered, props.wrap && styles.wrap, style]} {...props}
  />
);

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  wrap: {
    flexWrap: 'wrap'
  }
});

Row.propTypes = {
  centered: PropTypes.bool,
  wrap: PropTypes.bool

};

Row.defaultProps = {
  centered: null,
  wrap: null
};

export default Row;
