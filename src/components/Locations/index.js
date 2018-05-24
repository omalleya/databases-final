import React from 'react';

const Locations = () => (
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
    </div>
  </div>
);

export default Locations;
