const cors = require('cors');
const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Enable CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from HTTPS Node server');
});

const options = {
  key: fs.readFileSync('/run/secrets/key'),
  cert: fs.readFileSync('/run/secrets/cert')
};

https.createServer(options, app).listen(8081, () => {
  console.log('HTTPS Server running at https://localhost:8081');
});
