import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllTvshows } from '../../redux/actions/getTvShows.action';

export class TopPicks extends Component {
  componentWillMount() {
    const { getAllTvshows } = this.props;
    getAllTvshows();
  }

  render() {
    const { tvshows } = this.props;
    return (
      <Fragment>
        <div className="contianer movies-list">
          <div className="Title">
            <h2 data-reactid=".0.2.0.0">Top Picked TvShows</h2>
            <p>
                Trying to find the best movie to watch on CineMovie can be a daunting challenge.
            </p>
          </div>
          {new Array(5).fill(1, 0, 5).map(() => (
            <>
              <div
                className="row"
                style={{ paddingLeft: '20px', marginBottom: '100px' }}>
                {(Array.isArray(tvshows) ? tvshows : []).map(
                  ({ name, image: { medium } }, index) => {
                    if (index > 4) {
                      return;
                    }
                    tvshows.splice(index, 1);
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
)(TopPicks);
