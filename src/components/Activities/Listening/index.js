import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Listening = () => (
  <div>
    <h1>Listening Activities</h1>
    <div>
      <h3>Create Listening Activity</h3>
      <form>
        <div>
          <label htmlFor="baseActivity">Base Activity</label>
          <select id="baseActivity">
            <option value="NULL">NULL</option>
          </select>
        </div>
        <div>
          <label htmlFor="link">Link</label>
          <input type="text" id="link"/>
        </div>
        <div>
          <label htmlFor="interest">Interest</label>
          <input type="number" id="interest"/>
        </div>
        <input type="submit" />
      </form>
    </div>
    <div>
      <h3>Current Listening Activities:</h3>
    </div>
  </div>
);

export default Listening;

