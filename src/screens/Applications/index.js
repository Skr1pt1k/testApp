import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {Screen, Row} from '_components';
import {restaurantsActions} from '_store/restaurants';

import styles from '../styles';

export const ApplicationsScreen = ({route, navigation}) => {
  const restaurantId = route.params.restaurantId || null;
  const dispatch = useDispatch();

  const {applications} = useSelector(state => state.restaurants);

  useEffect(() => {
    dispatch(restaurantsActions.setRestaurantApplication(restaurantId));

    return () => {
      dispatch(restaurantsActions.unsetRestaurantApplicationSuccess());
    };
  }, []);

  const handleNavigateResponses = (responseId) => {
    navigation.navigate('Responses', {responseId});
  };

  const renderItem = (value) => {
    const {firstname, lastname, position, id} = value.item;
    const fullName = `${ firstname } ${ lastname }`;

    return (
      <TouchableOpacity style={{...styles.itemWrapper, ...styles.alignStart}} onPress={() => handleNavigateResponses(id)}>
        <Row centered>
          <Text style={styles.itemLabel}>Full name: </Text>
          <Text style={{...styles.itemLabel, ...styles.itemLittle}}>{fullName}</Text>
        </Row>
        <Row centered wrap>
          <Text style={styles.itemLabel}>Position: </Text>
          <Text style={{...styles.itemLabel, ...styles.itemLittle}}>{position}</Text>
        </Row>
      </TouchableOpacity>
    );
  };

  return (
    <Screen>
      <Text style={styles.pageTitle}>Applications</Text>
      <FlatList
        data={applications}
        style={{paddingHorizontal: 20}}
        renderItem={renderItem}
      />
    </Screen>
  );
};

ApplicationsScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object
};
