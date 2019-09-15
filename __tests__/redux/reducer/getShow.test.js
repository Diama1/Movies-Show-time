import * as tvshowType from '../../../src/redux/actions/types/tvshows.type';
import  getTvshows from '../../../src/redux/reducers/getTvshows.reducer';

const initialState = {
    tvshows: [],
    error: '',
    message: '',
  };

  describe('List TV Shows', () => {
    test('GET_SHOWS_SUCCESS', () => {
      const reducer = getTvshows(initialState, {
        type: tvshowType.GET_SHOWS_SUCCESS,
        payload: [],
      });
      expect(reducer.tvshows).toEqual([]);
    });
    test('GET_SHOWS_FAIL', () => {
      const reducer = getTvshows(null, {
        type: tvshowType.GET_SHOWS_FAIL,
        payload: 'Something went Wrong!',
      });
  
      expect(reducer.error).toEqual('Something went Wrong!');
    });
  });

