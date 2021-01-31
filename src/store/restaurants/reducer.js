import {restaurantsConstants} from './constants';

const initialState = {
  data: [],
  loading: false,
  applications: []
};

export const restaurantsReducer = (state = initialState, action) => {
  const {type, restaurants, info} = action;

  switch (type) {
    case restaurantsConstants.GET_RESTAURANTS_REQUEST:
      return {...state, loading: true};
    case restaurantsConstants.GET_RESTAURANTS_SUCCESS:
      return {...state, data: restaurants, loading: false};
    case restaurantsConstants.SET_RESTAURANT_APPLICATIONS_SUCCESS:
      return {...state, applications: info};
    case restaurantsConstants.UNSET_RESTAURANT_APPLICATIONS_SUCCESS:
      return {...state, applications: []};
    default:
      return state;
  }
};
