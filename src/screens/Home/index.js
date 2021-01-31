import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList, View, Text} from 'react-native';
import PropTypes from 'prop-types';

import {Screen, Loader} from '_components';
import {restaurantsActions} from '_store/restaurants';

import styles from './styles';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {data, loading} = useSelector(state => state.restaurants);

  useEffect(() => {
    dispatch(restaurantsActions.fetch());
  }, []);

  const renderItem = (value) => (
    <View style={styles.itemWrapper}>
      <Text style={styles.itemLabel} >{value.item.restaurant.label}</Text>
    </View>
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
