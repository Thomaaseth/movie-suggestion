// import logo from './logo.svg';
import React, { useEffect } from 'react';

import './App.css';

function App() {

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const bearerToken = process.env.REACT_APP_BEARER_TOKEN;


    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${bearerToken}`
      }
    };


  const url = 'https://api.themoviedb.org/3/authentication';

  fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Testing API</h1>
    </div>
  );
}

export default App;
