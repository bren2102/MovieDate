import React from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

class Details extends React.Component {
  state = {
    movieDetail: [],
    price: '',
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
  }

  render() {
    const {movieDetail, price} = this.state;
    const fee = parseFloat("2.30");
    const moviePrice = parseFloat(price);
    const total = (moviePrice + fee).toFixed(2);
    return (
      <div id="details">
        <div id="dImage">
          <img src={movieDetail.image} />
        </div>
        <div id="payingDetail">
          <div>
            <h2>{movieDetail.name.toUpperCase()}</h2>
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
          <Link to={`/${movieDetail.name}/appointment`} style={{display: 'flex', justifyContent: 'flex-end', }}>
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Details);