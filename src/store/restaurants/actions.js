import {restaurantsConstants} from './constants';

export const restaurantsActions = {
  fetch: () => ({type: restaurantsConstants.GET_RESTAURANTS_REQUEST}),
  fetchSuccess: (restaurants) => ({type: restaurantsConstants.GET_RESTAURANTS_SUCCESS, restaurants}),

  setRestaurantApplication: (restaurantId) => ({type: restaurantsConstants.SET_RESTAURANT_APPLICATIONS_REQUEST, restaurantId}),
  setRestaurantApplicationSuccess: (applications) => ({type: restaurantsConstants.SET_RESTAURANT_APPLICATIONS_SUCCESS, applications}),

  unsetRestaurantApplicationSuccess: () => ({type: restaurantsConstants.UNSET_RESTAURANT_APPLICATIONS_SUCCESS}),

  setResponsesRequest: (responseId) => ({type: restaurantsConstants.SET_RESPONSES_REQUEST, responseId}),
  setResponsesSuccess: (responses) => ({type: restaurantsConstants.SET_RESPONSES_SUCCESS, responses}),

  unsetResponsesSuccess: () => ({type: restaurantsConstants.UNSET_RESPONSES_SUCCESS}),

  setViewedResponse: (viewedId) => ({type: restaurantsConstants.SET_VIEWED_RESPONSE_SUCCESS, viewedId})
};
