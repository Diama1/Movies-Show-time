import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import HomeComponent, { Home} from '../../src/components/pages/Home';
import store from '../../src/redux/store';


let tvShows;
const props = {
  getAllTvshows: jest.fn(),
  tvshows: {
    tvshows: []
  }
};
describe('CineMovie Tvshows', () => {
  test('Should display TVSHows', () => {
    tvShows = shallow(<Home {...props} />);

    expect(tvShows).toHaveLength(1);
  });
  test('Should map states to props...', () => {
    tvShows = mount(<Provider store={store}><HomeComponent {...props} /></Provider>);
    expect(tvShows).toHaveLength(1);
  });
});
