import React, { Component } from 'react';
import { getActivities, getTopics, getTopicsActivitiesRelations } from '../../../../utils/apiCalls';

class ChangeTopicsActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      activities: [],
      topicsactivities: [],
      currentTopic: props.location.state.tid,
      currentActivity: props.location.state.aid,
    }
  }

  componentWillMount() {
    getActivities()
      .then(activities => {
        this.setState({ activities });
      });

    getTopics()
      .then(topics => {
        this.setState({ topics });
      });

    // get topic activities relations
    getTopicsActivitiesRelations()
      .then(topicsactivities => {
        this.setState({ topicsactivities });
      });
  }

  render() {
    return (
      <div>
        <h1>Change Relationship</h1>
        <form>
          <select name="activities" id="activities" value={this.state.currentActivity} onChange={(e) => this.setState({ currentActivity: e.target.value })}>
            {this.state.activities.map((activity, i) => <option key={i} value={activity.id}>{activity.name}</option>)}
          </select>
          <select name="topics" id="topics" value={this.state.currentTopic} onChange={(e) => this.setState({ currentTopic: e.target.value })}>
            {this.state.topics.map((topic, i) => <option key={i} value={topic.id}>{topic.name}</option>)}
          </select>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ChangeTopicsActivities;
