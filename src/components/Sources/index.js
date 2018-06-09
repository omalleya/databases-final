import React, { Component } from 'react';

import Table from '../Table';
import { getSources } from '../../utils/apiCalls';

class Sources extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
    };
  }

  componentWillMount() {
    getSources()
      .then(sources => {
        this.setState({ sources });
      });
  }

  render() {
    return (
      <div>
        <h1>Sources</h1>
        <div>
          <h3>Create Source</h3>
          <form>
            <label htmlFor="name">Source Name</label>
            <input type="text" id="name" />
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Sources:</h3>
          <Table
            headers={[
              { html: 'id', prop: 'id' }, 
              { html: 'name', prop: 'name' }]
            }
            data={this.state.sources}
          />
        </div>
      </div>
    );
  }
}

export default Sources;
