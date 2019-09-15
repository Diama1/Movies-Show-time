import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAllTvshows } from '../../redux/actions/getTvShows.action';
export class Home extends Component {
  componentWillMount() {
    const { getAllTvshows } = this.props;
    getAllTvshows();
  }
  render() {
    const { tvshows } = this.props;
    return (
      <Fragment>
        <section className="movies-silder">
          <div className="content">
            <img
              className="logo"
              src="http://www.returndates.com/backgrounds/narcos.logo.png"
              alt=""
            />
            <h2>Season 2 now available</h2>
            <p>
              The true story of Colombia's infamously violent and powerful drug
              cartels fuels this gritty gangster drama series.
            </p>
          </div>
          <div className="overlay"></div>
        </section>
        <div className="contianer movies-list">
          <div className="Title">
            <h2 data-reactid=".0.2.0.0">Latest TV Shows</h2>
          </div>
          {new Array(3).fill(1, 0, 3).map(() => (
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
                        <img src={medium} alt="image" height="240px" />
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
)(Home);
