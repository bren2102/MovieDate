/* eslint-disable no-alert */
import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Details extends React.Component {
  state = {
    movieDetail: [],
    moviePrice: '',
    cities: [],
    cityName: 'Lima',
    date: '',
  }

  componentDidMount() {
    const { match } = this.props;
    const { name } = match.params;
    const moviesUrl = `/api/movies/${name}`;
    axios.get(moviesUrl)
      .then(data => {
        this.setState({
          movieDetail: data.data[0],
          moviePrice: data.data[0].price,
        });
      });
    const citiesUrl = '/api/cities';
    axios.get(citiesUrl)
      .then(data => {
        this.setState({
          cities: data.data,
        });
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit = () => {
    const { currentUser, history } = this.props;
    const {
      moviePrice, movieDetail, cityName, date,
    } = this.state;
    const appointmentUrl = '/api/ticket/create';
    if (date !== '') {
      axios.post(appointmentUrl, {
        username: currentUser,
        price: moviePrice,
        movie_name: movieDetail.name,
        city_name: cityName,
        date,
      });
      history.push('/Tickets');
    } else {
      alert('Please select a date');
    }
  }

  render() {
    const {
      movieDetail, moviePrice, cities, date,
    } = this.state;
    const fee = parseFloat('2.30');
    const moviePriceFloat = parseFloat(moviePrice);
    const total = (moviePriceFloat + fee).toFixed(2);
    return (
      <div id="details">
        <div id="dImage">
          <img src={movieDetail.image} alt={movieDetail.name} />
        </div>
        <div id="payingDetail">
          <div>
            <h2>{movieDetail.name}</h2>
            <span>{movieDetail.description}</span>
          </div>
          <div id="bgGray">
            <span>Tax Fee</span>
            <span>
              $
              {fee.toFixed(2)}
            </span>
          </div>
          <div>
            <span>Ticket price</span>
            <span>
              $
              {moviePriceFloat.toFixed(2)}
            </span>
          </div>
          <div id="bgGray">
            <span>Total amount payable</span>
            <span>
              $
              {total}
            </span>
          </div>
          <div>
            <span>Duration</span>
            <span>
              {movieDetail.lasts}
              {' '}
              min
            </span>
          </div>
          <div>
            <span>5.9%APR</span>
            <span>Representative</span>
          </div>
          <span>Choose a date:</span>
          <input id="date" type="date" min="2020-09-09" data-date-inline-picker="true" onChange={this.handleChange} value={date} />
          <span>Choose a city:</span>
          <select name="cities" id="cityName" onChange={this.handleChange}>
            {cities.map(city => <option value={city.name} key={city.name}>{city.name}</option>)}
          </select>
          <button type="button" onClick={this.handleSubmit}>
            Book Now
          </button>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  currentUser: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

Details.defaultProps = {
  currentUser: '',
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, null)(withRouter(Details));
