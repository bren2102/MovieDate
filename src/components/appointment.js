import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { Icon, InlineIcon } from '@iconify/react';
import xPack from '@iconify/icons-cib/x-pack';

class Appointment extends React.Component {
  state = {
    cities:[],
  }
  componentDidMount() {
    const citiesUrl = '/cities';
    axios.get(citiesUrl)
      .then(data => {
        this.setState ({cities: data.data,})
      });
  }

  render() {
    const { name } = this.props.match.params;
    const { cities } = this.state;
    return (
      <div id="appointment">
        <Link to={`/${name}`} style={{ display: 'flex', alignSelf: 'flex-end', }}>
          <Icon icon={xPack} style={{ color: 'white', fontSize: '30px', }} />
        </Link>
        <h1>BOOK YOUR MOVIE DATE</h1>
        {name}
        <div>
          <select name="cities" id="cities">
            {cities.map(city =>
              <option value={city.name} key={city.name}>{city.name}</option>
            )}
          </select>
          <Link to={`/${name}`}>
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Appointment); 