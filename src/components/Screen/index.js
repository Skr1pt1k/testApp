import React from 'react';
import {View, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {RFValue} from 'react-native-responsive-fontsize';

const Screen = ({style, ...props}) => {
  return (
    <View {...props} style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.flex1}>{props.children}</SafeAreaView>
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flex1: {
    flex: 1,
    paddingTop: RFValue(30)
  }
});

Screen.propTypes = {
  style: PropTypes.object,
  children: PropTypes.array
};
