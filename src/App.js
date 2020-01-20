import React from 'react';
import './App.css';
import SearchTrainForm from "./components/trains-search-form"
import TrainsList from "./components/trains-list";
import CarriagesList from "./components/carriages-list"
import SeatsList from "./components/seats-list";


class App extends React.Component {
  state = {
    search: null,
    train: null,
    carriage: null
  };

  saveSearch = search => {
    this.setState({search: search});
  };

  saveTrain = train => {
    this.setState({train: train});
  };

  saveCarriage = carriage => {
    this.setState({carriage: carriage});
  };

  render() {
    return (
        <div className="App">
          <h1>Train Tickets</h1>
          {this.state.search ?
              this.state.train ?
                  this.state.carriage ?
                      <SeatsList chosenCarriage={this.state.carriage} saveCarriage={this.saveCarriage}/>
                      : <CarriagesList chosenTrain={this.state.train} saveTrain={this.saveTrain}
                                       saveCarriage={this.saveCarriage}/>
                  : <TrainsList searchParams={this.state.search} saveSearch={this.saveSearch}
                                saveTrain={this.saveTrain}/>

              : <SearchTrainForm saveSearch={this.saveSearch}/>}
        </div>
    );
  }
}

export default App;
