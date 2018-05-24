import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Acting = () => (
  <div>
    <h1>Acting Activities</h1>
    <div>
      <h3>Create Acting Activity</h3>
      <form>
        <div>
          <label htmlFor="baseActivity">Base Activity</label>
          <select id="baseActivity">
            <option value="NULL">NULL</option>
          </select>
        </div>
        <div>
          <label htmlFor="exertion">Exertion</label>
          <input type="number" id="exertion"/>
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input type="number" id="time"/>
        </div>
        <input type="submit" />
      </form>
    </div>
    <div>
      <h3>Current Acting Activities:</h3>
    </div>
  </div>
);

export default Acting;

