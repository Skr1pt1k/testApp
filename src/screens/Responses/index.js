import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {Screen, Row} from '_components';
import {restaurantsActions} from '_store/restaurants';

import styles from '../styles';

export const ResponsesScreen = ({route, navigation}) => {
  const responseId = route.params.responseId || null;
  const dispatch = useDispatch();

  const {responses} = useSelector(state => state.restaurants);

  useEffect(() => {
    dispatch(restaurantsActions.setResponsesRequest(responseId));
    dispatch(restaurantsActions.setViewedResponse(responseId));

    return () => {
      dispatch(restaurantsActions.unsetResponsesSuccess());
    };
  }, []);

  const renderItem = (value) => {
    const {question, answer} = value.item;

    const isNoAnswer = answer === 'No data available';

    return (
      <View style={{...styles.itemWrapper, ...styles.alignStart}}>
        <Row centered wrap>
          <Text style={styles.itemLabel}>Question: </Text>
          <Text style={{...styles.itemLabel, ...styles.itemLittle}}>{question}</Text>
        </Row>
        <Row centered wrap>
          <Text style={styles.itemLabel}>Answer: </Text>
          <Text style={{...styles.itemLabel, ...styles.itemLittle, ...isNoAnswer && {color: 'red'}}}>{answer}</Text>
        </Row>
      </View>
    );
  };

  return (
    <Screen>
      <Text style={styles.pageTitle}>Responses</Text>
      <FlatList
        data={responses}
        style={{paddingHorizontal: 20}}
        renderItem={renderItem}
      />
    </Screen>
  );
};

ResponsesScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object
};
