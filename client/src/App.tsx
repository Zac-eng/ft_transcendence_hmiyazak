import React, { useState } from 'react';

type LogHit = {
  _source: {
    message: string;
  };
};

function App() {
  const [query, setQuery] = useState('');
  const [logs, setLogs] = useState<LogHit[]>([]);

  const searchLogs = async () => {
    const res = await fetch(`http://localhost:3001/logs?query=${encodeURIComponent(query)}`);
    const data: LogHit[] = await res.json();
    setLogs(data);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Log Search</h2>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search logs..."
        style={{ marginRight: '1rem' }}
      />
      <button onClick={searchLogs}>Search</button>
      <ul>
        {logs.map((log, i) => (
          <li key={i}>{log._source.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
