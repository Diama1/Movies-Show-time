import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getAllTvshows } from '../../../src/redux/actions/getTvShows.action';

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});
describe('Get All Tv Shows', () => {
    beforeEach(() => {
      moxios.install();
    });
    afterEach(() => {
      moxios.uninstall();
      store.clearActions();
    });
    test('Tv shows List Test...', () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {
            data: [],
          },
        });
      });
      return store.dispatch(getAllTvshows(1)).then(() => {
        expect(store.getActions().length).toEqual(1);
      });
    });
    test('Tv shows list Error...', () => {
        const expected = {
          data: {
            error: {
              message: 'Something went wrong',
            },
          },
        };
        moxios.stubRequest(/.*/, {
          status: 500,
          response: expected,
        });
        return store.dispatch(getAllTvshows()).then(() => {});
      });
})  