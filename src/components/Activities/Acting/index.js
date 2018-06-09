import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { getActivities, getActingActivities } from '../../../utils/apiCalls';

class Acting extends Component {
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
    getActingActivities()
      .then(activities => {
        this.setState({ activities });
      });
  }

  render() {
    return (
      <div>
        <h1>Acting Activities</h1>
        <div>
          <h3>Create Acting Activity</h3>
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
              <label htmlFor="exertion">Exertion</label>
              <input type="number" id="exertion"/>
            </div>
            <div>
              <label htmlFor="time">Time (minutes)</label>
              <input type="number" id="time"/>
            </div>
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Acting Activities:</h3>
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

export default Acting;

