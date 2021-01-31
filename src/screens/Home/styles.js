import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {grey} from '_colors';

export default StyleSheet.create({
  itemWrapper: {
    paddingHorizontal: RFValue(20),
    paddingVertical: RFValue(20),
    alignItems: 'center',
    borderWidth: RFValue(1),
    borderColor: grey,
    borderRadius: RFValue(20),
    marginBottom: RFValue(10)
  },
  itemLabel: {
    fontSize: RFValue(16),
    fontWeight: '600'
  },
  pageTitle: {
    alignSelf: 'center',
    margin: RFValue(30),
    fontSize: RFValue(20),
    fontWeight: 'bold'
  }
});
