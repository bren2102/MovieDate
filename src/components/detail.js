import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class Details extends React.Component {
  state = {
    movieDetail: [],
    price: '',
    cities: [],
  }

  componentDidMount() {
    const { name } = this.props.match.params;
    const moviesUrl = `/movies/${name}`;
    axios.get(moviesUrl)
      .then(data => {
        this.setState({
          movieDetail: data.data[0],
          price: data.data[0].price,
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

  render() {
    const {movieDetail, price, cities } = this.state;
    const fee = parseFloat("2.30");
    const moviePrice = parseFloat(price);
    const total = (moviePrice + fee).toFixed(2);
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
            <span>$ {moviePrice.toFixed(2)}</span>
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
          <input type="date" data-date-inline-picker="true"></input>
          <span>Choose a city:</span>
          <select name="cities" id="cities">
            {cities.map(city =>
              <option value={city.name} key={city.name}>{city.name}</option>
            )}
          </select>
          <Link to={'/Tickets'} >
            Book Now
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Details);