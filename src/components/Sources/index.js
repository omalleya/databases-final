import React from 'react';

const Sources = () => (
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
    </div>
  </div>
);

export default Sources;
