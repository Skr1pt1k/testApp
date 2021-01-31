import {restaurantsConstants} from './constants';

const initialState = {
  data: [],
  loading: false,
  applications: [],
  responses: [],
  viewedResponses: []
};

export const restaurantsReducer = (state = initialState, action) => {
  const {type, restaurants, applications, responses, viewedId} = action;

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

    case restaurantsConstants.SET_VIEWED_RESPONSE_SUCCESS:
      return {...state, viewedResponses:
        state.viewedResponses.find(el => el.id === viewedId) ?
          state.viewedResponses : [...state.viewedResponses, {id: viewedId}]};

    default:
      return state;
  }
};
