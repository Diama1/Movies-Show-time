import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllTvshows } from '../../redux/actions/getTvShows.action';

export class Horror extends Component {
  componentWillMount() {
    const { getAllTvshows } = this.props;
    getAllTvshows();
  }

  render() {
    const { tvshows } = this.props;
    const filteredTvshows = (Array.isArray(tvshows) ? tvshows : []).filter(
      ({ genres }) => genres.includes('Horror')
    );
    return (
      <Fragment>
        <div className="contianer movies-list">
          <div className="Title">
            <h2 data-reactid=".0.2.0.0">Horror TvShows</h2>
            <p>The psychology behind our love of horror films is pretty simple:
               We love the adrenaline rush, and we feel comparatively safe knowing that 
               a hatchet-wielding clown isn’t 
              lurking outside our window. 
              (Probably. Feel free to go investigate.</p>
          </div>
          {new Array(5).fill(1, 0, 5).map(() => (
            <>
              <div
                className="row"
                style={{ paddingLeft: '20px', marginBottom: '100px' }}>
                {filteredTvshows.map(
                  ({ name, genres, image: { medium } }, index) => {
                    if (index > 4) {
                      return false;
                    }
                    filteredTvshows.splice(index, 1);
                    return (
                      <div className="col-md-2 Item">
                        <img src={medium} alt="image" />
                        <br />
                        <h7>{name}</h7>
                      </div>
                    );
                  }
                )}
              </div>
            </>
          ))}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = ({
  tvshows: {
    tvshows: { data: tvshows }
  }
}) => ({
  tvshows
});
export default connect(
  mapStateToProps,
  { getAllTvshows }
)(Horror);
