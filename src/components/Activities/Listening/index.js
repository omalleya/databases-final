import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { getActivities, getListeningActivities } from '../../../utils/apiCalls';

class Listening extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activities: [],
      activityDropdown: [],
    }
  }

  componentWillMount() {
    getActivities()
      .then(activityDropdown => {
        this.setState({ activityDropdown });
      });

    // get activities
    getListeningActivities()
      .then(activities => {
        this.setState({ activities });
      });
  }

  render() {
    return (
      <div>
        <h1>Listening Activities</h1>
        <div>
          <h3>Create Listening Activity</h3>
          <form>
            <div>
              <label htmlFor="baseActivity">Base Activity</label>
              <select id="baseActivity">
                {
                  this.state.activityDropdown.map((el, i) => <option key={i} value={el.id}>{el.name}</option>)
                }
              </select>
            </div>
            <div>
              <label htmlFor="link">Link</label>
              <input type="text" id="link"/>
            </div>
            <div>
              <label htmlFor="interest">Interest</label>
              <input type="number" id="interest"/>
            </div>
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Listening Activities:</h3>
          {this.state.activities.map((activity, i) => (
            <div key={i}>
              <p>
                {activity.id} | {activity.name} | {activity.date} | {activity.sid} | {activity.lid}
              </p>
              <button>Delete above entry</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Listening;

