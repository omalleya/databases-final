const apiGet = (path) =>
  fetch(path)
    .then(res => {
      return res.json();
    })
    .catch(err => err);

export const getSources = () =>
  apiGet('/api/sourcesDropdown');
  
export const getLocations = () =>
  apiGet('/api/locationsDropdown');
  
export const getTopics = () =>
  apiGet('/api/topicsDropdown');

export const getActivities = () =>
  apiGet('/api/activities');

export const getActingActivities = () =>
  apiGet('/api/acting');

export const getListeningActivities = () =>
  apiGet('/api/listening');

export const getReadingActivities = () =>
  apiGet('/api/reading');

export const getSpeakingActivities = () =>
  apiGet('/api/speaking');

export const getTopicsActivitiesRelations = () =>
  apiGet('/api/topicsactivities');
