import React, { Component } from 'react';

import { getActivities, getTopics, getTopicsActivitiesRelations } from '../../../utils/apiCalls';
import Table from '../../Table';

class TopicsActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      activities: [],
      topicsactivities: [],
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

    getTopicsActivitiesRelations()
      .then(topicsactivities => {
        this.setState({ topicsactivities });
      });
  }

  render() {
    const topicsactivitiesArray = this.state.topicsactivities.map(relation => (
      {
        id: `${relation.tid}-${relation.aid}`,
        activity: this.state.activities[this.state.activities.findIndex((el) => el.id === relation.aid)].name,
        topic: this.state.topics[this.state.topics.findIndex((el) => el.id === relation.tid)].name,
      }
    ));

    return (
      <div>
        <h1>Attach Topics to Activities</h1>
        <form>
          <select name="activities" id="activities">
            {this.state.activities.map((activity, i) => <option key={i} value={activity.id}>{activity.name}</option>)}
          </select>
          <select name="topics" id="topics">
            {this.state.topics.map((topic, i) => <option key={i} value={topic.id}>{topic.name}</option>)}
          </select>
          <input type="submit" />
        </form>
        <div>
          <h3>Current Relations</h3>
          <Table
            headers={[
              { html: 'Activity', prop: 'activity' },
              { html: 'Topic', prop: 'topic' },
            ]}
            data={topicsactivitiesArray}
            update={(id) => this.props.history.push('/topicactivitychange', { tid: id.split('-')[0], aid: id.split('-')[1] })}
          />
        </div>
      </div>
    );
  }
};

export default TopicsActivities;
