import React from 'react';
import { withRouter } from 'react-router-dom';

const Details = (props) => {
  const { name } = props.match.params;

  return (
    <div id="details">
      <div id="dImage">
        <img src="http://joseignaciofilmfestival.com/wp-content/uploads/2019/12/parasite_Mesa-de-trabajo-1-copia.jpg" />
      </div>
      <div id="payingDetail">
        <div>
          <h2>{name}</h2>
          <span>littleDescription</span>
        </div>
        <div id="bgGray">
          <span>Finance Fee</span>
          <span>$</span>
        </div>
        <div>
          <span>Option to purchase Fee</span>
          <span>$</span>
        </div>
        <div id="bgGray">
          <span>Total amount payable</span>
          <span>$</span>
        </div>
        <div>
          <span>Duration</span>
          <span>1.5h</span>
        </div>
        <div>
          <span>5.9%APR</span><span>Representative</span>
        </div>
        <button>Book Now</button>
      </div>
    </div>
  )
}

export default withRouter(Details);