import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const stations = [
  {id: 1, name: 'Москва'},
  {id: 2, name: 'Санкт-Петербург'},
  {id: 3, name: 'Новосибирск'},
  {id: 4, name: 'Екатеринбург'},
  {id: 5, name: 'Нижний Новгород'},
  {id: 6, name: 'Казань'},
  {id: 7, name: 'Челябинск'},
  {id: 8, name: 'Омск'},
  {id: 9, name: 'Самара'},
  {id: 10, name: 'Ростов-на-Дону'},
];

class SearchTrainForm extends React.Component {
  saveSearch = () => {
    this.props.saveSearch({
      fromStation: document.getElementById("from-station").value,
      toStation: document.getElementById("to-station").value,
      date: document.getElementById("date").value,
      withTickets: document.getElementById("with-tickets").checked
    })
  };

  render() {
    return (
        <div>
          <Autocomplete
              id="from-station"
              options={stations}
              getOptionLabel={option => option.name}
              style={{width: 300}}
              renderInput={params => (
                  <TextField {...params} label="From" variant="outlined" fullWidth/>
              )}
          />
          <Autocomplete
              id="to-station"
              options={stations}
              getOptionLabel={option => option.name}
              style={{width: 300}}
              renderInput={params => (
                  <TextField {...params} label="To" variant="outlined" fullWidth/>
              )}
          />
          <input id="date" className="form-parts" type="date"/><br/>
          <label htmlFor="with-tickets">With tickets</label>
          <input id="with-tickets" type="checkbox" defaultChecked={true}/><br/>
          <button className="form-parts" onClick={this.saveSearch}>Search</button>
          <br/>
        </div>
    );
  }
}

export default SearchTrainForm;