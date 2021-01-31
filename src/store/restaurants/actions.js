import {restaurantsConstants} from './constants';

export const restaurantsActions = {
  fetch: () => ({type: restaurantsConstants.GET_RESTAURANTS_REQUEST}),
  fetchSuccess: (restaurants) => ({type: restaurantsConstants.GET_RESTAURANTS_SUCCESS, restaurants}),
  setRestaurantApplication: (restaurantId) => ({type: restaurantsConstants.SET_RESTAURANT_APPLICATIONS_REQUEST, restaurantId}),
  setRestaurantApplicationSuccess: (info) => ({type: restaurantsConstants.SET_RESTAURANT_APPLICATIONS_SUCCESS, info}),
  unsetRestaurantApplicationSuccess: () => ({type: restaurantsConstants.UNSET_RESTAURANT_APPLICATIONS_SUCCESS})
};
