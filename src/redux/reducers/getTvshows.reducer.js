import * as tvshowsTypes from '../actions/types/tvshows.type';

const initialState = {
    tvshows: [],
    error: null,
    message: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
      
      case tvshowsTypes.GET_SHOWS_SUCCESS:
        return {
          ...state,
          tvshows: payload,
        };
      case tvshowsTypes.GET_SHOWS_FAIL:
        return {
          ...state,
          error: payload,
        };
      default:
        return state;
    }
  };
  