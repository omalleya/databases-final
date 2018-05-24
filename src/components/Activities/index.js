import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const CreateActivity = () => (
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
          </select>
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location">
            <option value="NULL">NULL</option>
          </select>
        </div>
        <div>
          <label htmlFor="p1">Prompt 1</label>
          <textarea name="p1" id="p1" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="p2">Prompt 2</label>
          <textarea name="p2" id="p2" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="p3">Prompt 3</label>
          <textarea name="p3" id="p3" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="topics">Topics</label>
          <Select
            id="topics"
            value='one'
            onChange={() => console.log('change')}
            options={[
              { value: 'one', label: 'Temp' },
              { value: 'two', label: 'Temp' },
            ]}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
    <div>
      <h3>Current Activities:</h3>
    </div>
  </div>
);

export default CreateActivity;

