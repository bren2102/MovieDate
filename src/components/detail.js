import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Details extends React.Component {
  state = {
    movieDetail: [],
    moviePrice: '',
    cities: [],
    city_name: 'Lima',
    date: '',
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    const moviesUrl = `/movies/${name}`;
    axios.get(moviesUrl)
      .then(data => {
        this.setState({
          movieDetail: data.data[0],
          moviePrice: data.data[0].price,
        })
      })
    const citiesUrl = '/cities';
    axios.get(citiesUrl)
      .then(data => {
        this.setState({
          cities: data.data,
        })
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = () => {
    const { currentUser } = this.props;
    const appointmentUrl = '/ticket/create';
    axios.post(appointmentUrl, {
      username: currentUser,
      price: this.state.moviePrice,
      movie_name: this.state.movieDetail.name,
      city_name: this.state.city_name,
      date: this.state.date,
    })
  }

  render() {
    const { movieDetail, moviePrice, cities, date } = this.state;
    const fee = parseFloat("2.30");
    const moviePriceFloat = parseFloat(moviePrice);
    const total = (moviePriceFloat + fee).toFixed(2);
    return (
      <div id="details">
        <div id="dImage">
          <img src={movieDetail.image} alt={movieDetail.name}/>
        </div>
        <div id="payingDetail">
          <div>
            <h2>{movieDetail.name}</h2>
            <span>{movieDetail.description}</span>
          </div>
          <div id="bgGray">
            <span>Tax Fee</span>
            <span>$ {fee.toFixed(2)}</span>
          </div>
          <div>
            <span>Ticket price</span>
            <span>$ {moviePriceFloat.toFixed(2)}</span>
          </div>
          <div id="bgGray">
            <span>Total amount payable</span>
            <span>$ {total}</span>
          </div>
          <div>
            <span>Duration</span>
            <span>{movieDetail.lasts} min</span>
          </div>
          <div>
            <span>5.9%APR</span><span>Representative</span>
          </div>
          <span>Choose a date:</span>
          <input id="date" type="date" min="2020-09-09" data-date-inline-picker="true" onChange={this.handleChange} value={date}></input>
          <span>Choose a city:</span>
          <select name="cities" id="city_name" onChange={this.handleChange}>
            {cities.map(city =>
              <option value={city.name} key={city.name}>{city.name}</option>
            )}
          </select>
          <Link to={'/Tickets'}>
            <button type="button" onClick={this.handleSubmit}>
              Book Now
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
})

export default connect(mapStateToProps,null)(withRouter(Details));