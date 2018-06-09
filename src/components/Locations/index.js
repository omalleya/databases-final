import React, { Component } from 'react';

import Table from '../Table';
import { getLocations } from '../../utils/apiCalls';

class Locations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  componentWillMount() {
    getLocations()
      .then(locations => {
        this.setState({ locations });
      });
  }

  render() {
    return (
      <div>
        <h1>Locations</h1>
        <div>
          <h3>Create Location</h3>
          <form>
            <label htmlFor="name">Location Name</label>
            <input type="text" id="name" />
            <input type="submit" />
          </form>
        </div>
        <div>
          <h3>Current Locations:</h3>
          <Table
            headers={[
              { html: 'id', prop: 'id' }, 
              { html: 'name', prop: 'name' }]
            }
            data={this.state.locations}
          />
        </div>
      </div>
    );
  }
}

export default Locations;
