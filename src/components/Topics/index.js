import React, { Component } from 'react';

import Table from '../Table';
import { getTopics } from '../../utils/apiCalls';

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
  }

  componentWillMount() {
    getTopics()
      .then(topics => {
        this.setState({ topics });
      });
  }

  render() {
    return (
      <div>
        <h1>Topics</h1>
        <div>
          <h3>Create Topic</h3>
          <form>
            <label htmlFor="name">Topic Name</label>
            <input type="text" id="name" />
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Topics:</h3>
          <Table
            headers={[
              { html: 'id', prop: 'id' }, 
              { html: 'name', prop: 'name' }]
            }
            data={this.state.topics}
          />
        </div>
      </div>
    );
  }
}

export default Topics;
