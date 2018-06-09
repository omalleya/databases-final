import React, { Component } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import { getActivities, getLocations, getSources, getTopics } from '../../utils/apiCalls';

import Table from '../Table';

class Activities extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topics: [],
      activities: [],
      sources: [],
      locations: [],
      filter: 0,
      currentTopic: null,
    }
  }

  componentWillMount() {
    // get activities
    getActivities()
      .then(activities => {
        this.setState({ activities });
      });

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

    // get topics
    getTopics()
      .then(topics => {
        this.setState({ topics });
      });
  }

  render() {
    return (
      <div>
        <h1>Activities</h1>
        <div>
          <h3>Create Activity</h3>
          <form>
            <div>
              <label htmlFor="name">Activity Name</label>
              <input type="text" id="name"></input>
            </div>
            <div>
              <label htmlFor="date">Date activity was done</label>
              <input type="date" id="date"></input>
            </div>
            <div>
              <label htmlFor="source">Source</label>
              <select id="source">
                <option value="NULL">NULL</option>
                {this.state.sources.map((source, i) => (
                  <option key={i} value={source.id}>{source.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <select id="location">
                <option value="NULL">NULL</option>
                {this.state.locations.map((location, i) => (
                  <option key={i} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="p1">What did you learn?</label>
              <textarea name="p1" id="p1" cols="30" rows="10"></textarea>
            </div>
            <div>
              <label htmlFor="p2">How can you apply this knowledge?</label>
              <textarea name="p2" id="p2" cols="30" rows="10"></textarea>
            </div>
            <div>
              <label htmlFor="p3">What new topics would you like to study after experiencing this activity?</label>
              <textarea name="p3" id="p3" cols="30" rows="10"></textarea>
            </div>
            <div>
              <label htmlFor="topics">Topics</label>
              <Select
                id="topics"
                multi={true}
                value={this.state.currentTopic}
                onChange={(val) => this.setState({ currentTopic: val })}
                options={this.state.topics.map(topic => ({ label: topic.name, value: topic.id }))}
              />
            </div>
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Activities:</h3>
          <label htmlFor="filter">Filter By Location:</label>
          <select id="filter" value={this.state.filter} onChange={(e) => this.setState({ filter: e.target.value })}>
            <option value={0}>ALL</option>
            {this.state.locations.map((location, i) => (
              <option key={i} value={location.id}>{location.name}</option>
            ))}
          </select>
          <Table
            headers={[
              { html: 'id', prop: 'id'},
              { html: 'Name', prop: 'name' },
              { html: 'Date', prop: 'date' },
              { html: 'Source', prop: 'sid' },
              { html: 'Location', prop: 'lid' },
            ]}
            data={this.state.activities.filter(activity => (Number(this.state.filter) === 0 || activity.lid === Number(this.state.filter)))}
            update={(id) => this.props.history.push('/update', { id })}
          />
        </div>
      </div>
    );
  }
}

export default  withRouter(Activities);

