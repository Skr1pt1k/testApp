import {restaurantsConstants} from './constants';

const initialState = {
  data: [],
  loading: false,
  applications: [],
  responses: []
};

export const restaurantsReducer = (state = initialState, action) => {
  const {type, restaurants, applications, responses} = action;

  switch (type) {
    case restaurantsConstants.GET_RESTAURANTS_REQUEST:
      return {...state, loading: true};
    case restaurantsConstants.GET_RESTAURANTS_SUCCESS:
      return {...state, data: restaurants, loading: false};
    case restaurantsConstants.SET_RESTAURANT_APPLICATIONS_SUCCESS:
      return {...state, applications};
    case restaurantsConstants.UNSET_RESTAURANT_APPLICATIONS_SUCCESS:
      return {...state, applications: []};
    case restaurantsConstants.SET_RESPONSES_SUCCESS:
      return {...state, responses};
    case restaurantsConstants.UNSET_RESPONSES_SUCCESS:
      return {...state, responses: []};

    default:
      return state;
  }
};
