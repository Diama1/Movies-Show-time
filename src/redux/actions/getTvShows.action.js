import axios from 'axios';
import "regenerator-runtime/runtime"
import * as tvshowsTypes from './types/tvshows.type';
import { BACKEND_URL } from '../../utils/constants';

export const getAllTvshows = () => async (dispatch) => {
    try {
        const data = await axios.get(`${BACKEND_URL}`);

        dispatch({
            type: tvshowsTypes.GET_SHOWS_SUCCESS,
            payload: data,
        });
    } catch(error) {
        dispatch({
            type:tvshowsTypes.GET_SHOWS_FAIL,
            payload: error,
        });
    }
}
