import React, {useState} from 'react';

const FetchButton = () => {
  const [response, setResponse] = useState('');

  const handleClick = () => {
    fetch('https://localhost:8081')
      .then(res => res.text())
      .then(data => {
        setResponse(data);
        console.log('Response:', data);
      })
      .catch(err => {
        console.error('Error fetching:', err);
      });
  };

  return (
    <div>
      <button onClick={handleClick}>Send Request</button>
      <p>Server says: {response}</p>
    </div>
  );
};

export default FetchButton;
