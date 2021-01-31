import {takeLatest, put} from 'redux-saga/effects';
import dummyData from '../../../dummyData/applications.json';

import {restaurantsConstants} from './constants';
import {restaurantsActions} from './actions';

function *fetch() {
  try {
    const restaurants = dummyData.map((response) => response.restaurant);
    const uniqRestaurants = [...new Set(dummyData.map(item => item.restaurant.id))]
      .map((uniqId) => restaurants.find((r) => r.id === uniqId));

    yield put(restaurantsActions.fetchSuccess(uniqRestaurants));
  } catch (e) {
    yield put(console.warn('Error!'));
  }
}

function *setRestaurantApplication({restaurantId}) {
  try {
    const restaurantApplication = dummyData.filter((response) => response.restaurant.id === restaurantId);

    const applicationsInfo = restaurantApplication.map(response => {
      const {answers} = response.form_response;

      const firstname = answers.find(answer => answer.field.ref === 'application_firstname').text;
      const lastname = answers.find(answer => answer.field.ref === 'application_lastname').text;
      const position = answers.find(answer => answer.field.ref === 'application_position').choice.label;

      return {
        id: response.id,
        firstname,
        lastname,
        position
      };
    });

    yield put(restaurantsActions.setRestaurantApplicationSuccess(applicationsInfo));
  } catch (e) {
    yield put(console.warn('Error!'));
  }
}

export function *restaurantsSaga() {
  yield takeLatest(restaurantsConstants.GET_RESTAURANTS_REQUEST, fetch);
  yield takeLatest(restaurantsConstants.SET_RESTAURANT_APPLICATIONS_REQUEST, setRestaurantApplication);

}
