import {takeLatest, call, put} from 'redux-saga/effects';

import {restaurantsConstants} from './constants';
import {restaurantsActions} from './actions';
import {api} from '_services/api';

function *fetch(payload) {
  try {
    const response = yield call(api.restaurants.fetch);
    yield put(restaurantsActions.fetchSuccess(response));
  } catch (e) {
    yield put(console.warn('Error!'));
  }
}

export function *restaurantsSaga() {
  yield takeLatest(restaurantsConstants.GET_RESTAURANTS_REQUEST, fetch);

}
