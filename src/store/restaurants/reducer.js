import {restaurantsConstants} from './constants';

const initialState = {
  data: [],
  loading: false
};

export const restaurantsReducer = (state = initialState, action) => {
  const {type, restaurants} = action;

  switch (type) {
    case restaurantsConstants.GET_RESTAURANTS_REQUEST:
      return {...state, loading: true};
    case restaurantsConstants.GET_RESTAURANTS_SUCCESS:
      return {...state, data: restaurants, loading: false};
    default:
      return state;
  }
};
