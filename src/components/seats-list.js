import React from "react";

class SeatsList extends React.Component {
  resetCarriage = () => {
    this.props.saveCarriage(null)
  };

  render() {
    return (
        <React.Fragment>
          <h3>Carriage chosen:</h3>
          <p>
            Carriage id: {this.props.chosenCarriage.nr}<br/>
            Carriage type: {this.props.chosenCarriage.type}<br/>
            Tickets number: {this.props.chosenCarriage.tickets}<br/>
            Ticket price: {this.props.chosenCarriage.price}<br/>
          </p>
          <h3>Available seats:</h3>
          <h4>To be continued</h4>
          <button className="form-parts" onClick={this.resetCarriage}>Back</button>
        </React.Fragment>)
  }
}

export default SeatsList;