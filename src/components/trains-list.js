import React from "react";


class TrainsList extends React.Component {
  trains = [
    {id: '551С', name: 'Москва-Волгоград', carriages: 8, tickets: 77, priceFrom: 100, priceTo: 250},
    {id: '884', name: 'Брянск-Курск', carriages: 6, tickets: 11, priceFrom: 46, priceTo: 100},
    {id: '17', name: 'Москва-Курск', carriages: 3, tickets: 6, priceFrom: 500, priceTo: 800}
  ];

  resetSearch = () => {
    this.props.saveSearch(null)
  };

  saveTrain = train => {
    this.props.saveTrain(train)
  };

  render() {
    return (
        <React.Fragment>
          <h3>You were looking for:</h3>
          <ul>
            <li>Statiion from: {this.props.searchParams.fromStation}</li>
            <li>Statiion to: {this.props.searchParams.toStation}</li>
            <li>Date: {this.props.searchParams.date}</li>
            <li>With tickets: {this.props.searchParams.withTickets ? "yes" : "no"}</li>
          </ul>
          <h3>Found trains:</h3>
          {this.trains.map(train => {
            return <p key={train.id}>
              Train id: <a href="#" onClick={() => this.saveTrain(train)}>{train.id}</a><br/>
              Train name: {train.name}<br/>
              Tickets number: {train.tickets} in {train.carriages} carriages<br/>
              Ticket price from: {train.priceFrom} to: {train.priceTo}<br/>
            </p>
          })}
          <button className="form-parts" onClick={this.resetSearch}>Back</button>
        </React.Fragment>
    )
  }

}

export default TrainsList;