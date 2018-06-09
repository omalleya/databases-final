import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { getActivities, getReadingActivities } from '../../../utils/apiCalls';

class Reading extends Component {
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

    getReadingActivities()
      .then(activities => {
        this.setState({ activities });
      });
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
                {
                  this.state.activityDropdown.map((el, i) => <option key={i} val={el.id}>{el.name}</option>)
                }
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
            <div>
              <p key={i}>
                {activity.name}
              </p>
              <button>Delete above entry</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Reading;

