import React from "react";

class CarriagesList extends React.Component {
  carriages = [
    {nr: 2, type: 'плацкартный', tickets: 77, price: 100},
    {nr: 3, type: 'купейный', tickets: 5, price: 200},
    {nr: 7, type: 'плацкартный', tickets: 11, price: 100},
    {nr: 11, type: 'плацкартный', tickets: 28, price: 100}
  ];

  resetTrain = () => {
    this.props.saveTrain(null)
  };

  saveCarriage = carriage => {
    this.props.saveCarriage(carriage)
  };

  render() {
    return (
        <React.Fragment>
          <h3>Train chosen:</h3>
          <p>
            Train id: {this.props.chosenTrain.id}<br/>
            Train name: {this.props.chosenTrain.name}<br/>
            Tickets number: {this.props.chosenTrain.tickets} in {this.props.chosenTrain.carriages} carriages<br/>
            Ticket price from: {this.props.chosenTrain.priceFrom} to: {this.props.chosenTrain.priceTo}<br/>
          </p>
          <h3>Available carriages:</h3>
          {this.carriages.map(carriage => {
            return <p key={carriage.nr}>
              Carriage id: <a href="#" onClick={() => this.saveCarriage(carriage)}>{carriage.nr}</a><br/>
              Carriage type: {carriage.type}<br/>
              Tickets number: {carriage.tickets}<br/>
              Ticket price: {carriage.price}<br/>
            </p>
          })}
          <button className="form-parts" onClick={this.resetTrain}>Back</button>
        </React.Fragment>)
  }
}

export default CarriagesList;