import React from 'react';

const Topics = () => (
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
    </div>
  </div>
);

export default Topics;
