import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://immigration-backend.onrender.com') // buraya backend URL’ini yaz
      .then(response => setMessage(response.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="App">
      <h1>Immigration Bot Frontend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
