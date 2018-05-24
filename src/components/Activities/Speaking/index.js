import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Speaking = () => (
  <div>
    <h1>Speaking Activities</h1>
    <div>
      <h3>Create Speaking Activity</h3>
      <form>
        <div>
          <label htmlFor="baseActivity">Base Activity</label>
          <select id="baseActivity">
            <option value="NULL">NULL</option>
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
    </div>
  </div>
);

export default Speaking;

