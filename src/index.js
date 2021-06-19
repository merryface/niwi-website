import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//create a new Airtable object in React 
new Airtable({apiKey:'API_KEY'}).base('BASE_ID');

//base endpoint to call with each request
axios.defaults.baseURL =   'https://api.airtable.com/v0/appVuALKwYQLTlZ31/map/';

//content type to send with all POST requests 
axios.defaults.headers.post['Content-Type'] = 'application/json';

//authenticate to the base with the API key 
axios.defaults.headers['Authorization'] = 'keyZT9zfF92iVerr7';


import { Provider } from 'react-redux';
import store from './data/store';

ReactDOM.render(
  <React.StrictMode>
     <Provider store= { store }>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);