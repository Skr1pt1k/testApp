import {restaurantsConstants} from './constants';

export const restaurantsActions = {
  fetch: () => ({type: restaurantsConstants.GET_RESTAURANTS_REQUEST}),
  fetchSuccess: (restaurants) => ({type: restaurantsConstants.GET_RESTAURANTS_SUCCESS, restaurants})
};
