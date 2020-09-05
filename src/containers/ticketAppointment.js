 import React from 'react';
 import noTickets from '../assets/notickets.png';
 import { withRouter, Link} from 'react-router-dom';

 class TicketAppointment extends React.Component {
   state = {
     tickets: [],
   }
  render() {
    const { tickets } = this.state;
    if (tickets.length !== 0){
      return(
        <div id="tickets"></div>
      )
    } else {
      return (
        <div id="noTickets">
          <h3>NO TICKETS YET</h3>
          <img src={noTickets}></img>
          <span>
            Go <Link to={'/Movies'}>Here</Link> to choose a movie
          </span>
        </div>
      )
    }
  }
 }

 export default withRouter(TicketAppointment);