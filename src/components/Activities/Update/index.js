import React, { Component } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import { getLocations, getSources } from '../../../utils/apiCalls';

class UpdateActivity extends Component {
  constructor(props) {
    super(props);

    console.log(props.location.state.id);

    this.state = {
      sources: [],
      locations: [],
      activity: {
        name: '',
        date: '',
        source: '',
        location: '',
        p1: '',
        p2: '',
        p3: '',
      },
    }
  }

  componentWillMount() {
    fetch(`/api/activity/${this.props.location.state.id}`)
      .then(res => {
        return res.json();
      })
      .then(array => {
        const activity = array[0];
        activity.date = activity.date.slice(0, 10);
        console.log(activity);
        this.setState({ activity });
      })
      .catch(err => console.log(err));

    // get locations
    getLocations()
      .then(locations => {
        this.setState({ locations });
      });

    // get sources
    getSources()
      .then(sources => {
        this.setState({ sources });
      });
  }

  render() {
    return (
      <div>
        <h1>Activities</h1>
        <div>
          <h3>Update Activity</h3>
          <form>
            <div>
              <label htmlFor="name">Activity Name</label>
              <input type="text" id="name" value={this.state.activity.name}></input>
            </div>
            <div>
              <label htmlFor="date">Date activity was done</label>
              <input type="date" id="date" value={this.state.activity.date}></input>
            </div>
            <div>
              <label htmlFor="source">Source</label>
              <select id="source" value={this.state.activity.sid}>
                <option value="NULL">NULL</option>
                {this.state.sources.map((source, i) => (
                  <option key={i} value={source.id}>{source.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <select id="location" value={this.state.activity.lid}>
                <option value="NULL">NULL</option>
                {this.state.locations.map((location, i) => (
                  <option key={i} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="p1">Prompt 1</label>
              <textarea name="p1" id="p1" cols="30" rows="10" value={this.state.activity.p1}></textarea>
            </div>
            <div>
              <label htmlFor="p2">Prompt 2</label>
              <textarea name="p2" id="p2" cols="30" rows="10" value={this.state.activity.p2}></textarea>
            </div>
            <div>
              <label htmlFor="p3">Prompt 3</label>
              <textarea name="p3" id="p3" cols="30" rows="10" value={this.state.activity.p3}></textarea>
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateActivity);

