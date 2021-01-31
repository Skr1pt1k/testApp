import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {Screen, Loader} from '_components';
import {restaurantsActions} from '_store/restaurants';

import styles from '../styles';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(state => state.restaurants);

  const handleNavigateApplications = (restaurantId) => {
    navigation.navigate('Applications', {restaurantId});
  };

  useEffect(() => {
    dispatch(restaurantsActions.fetch());
  }, []);

  const renderItem = (value) => (
    <TouchableOpacity style={styles.itemWrapper} onPress={() => handleNavigateApplications(value.item.id)}>
      <Text style={styles.itemLabel} >{value.item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <Screen>
      <Text style={styles.pageTitle}>Restaurants</Text>
      {loading && <Loader />}
      { !loading &&
        <FlatList
          data={data}
          style={{paddingHorizontal: 20}}
          renderItem={renderItem}
        />
      }
    </Screen>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object
};
