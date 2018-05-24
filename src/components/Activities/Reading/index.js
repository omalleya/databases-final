import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Reading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    }
  }

  componentWillMount() {
    fetch('/api/reading')
      .then(res => {
        return res.json();
      })
      .then(activities => {
        this.setState({ activities });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Reading Activities</h1>
        <div>
          <h3>Create Reading Activity</h3>
          <form>
            <div>
              <label htmlFor="baseActivity">Base Activity</label>
              <select id="baseActivity">
                <option value="NULL">NULL</option>
              </select>
            </div>
            <div>
              <label htmlFor="beginningPage">Beginning Page</label>
              <input type="number" id="beginningPage"/>
            </div>
            <div>
              <label htmlFor="endingPage">Ending Page</label>
              <input type="number" id="endingPage"/>
            </div>
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Reading Activities:</h3>
          {this.state.activities.map((activity, i) => (
            <p key={i}>
              {activity.name}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default Reading;

