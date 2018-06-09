import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { getSpeakingActivities, getActivities } from '../../../utils/apiCalls';

class Speaking extends Component {
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
    getSpeakingActivities()
      .then(activities => {
        this.setState({ activities });
      });
  }

  render() {
    return (
      <div>
        <h1>Speaking Activities</h1>
        <div>
          <h3>Create Speaking Activity</h3>
          <form>
            <div>
              <label htmlFor="baseActivity">Base Activity</label>
              <select id="baseActivity">
                {
                  this.state.activityDropdown.map((el, i) => <option key={i} val={el.id}>{el.name}</option>)
                }
              </select>
            </div>
            <div>
              <label htmlFor="comfort">Comfort</label>
              <input type="number" id="comfort"/>
            </div>
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Speaking Activities:</h3>
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

export default Speaking;

