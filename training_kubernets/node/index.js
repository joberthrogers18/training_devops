const express = require('express');
const app = express();
const apm = require('elastic-apm-node');

apm.start({
  serviceName: 'NodeApp',
  serverUrl: 'http://apm-server:8200'
});

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ hello: 'world '});
});

app.listen(3000, () => {
  console.log(`Server running at port ${3000}`);
});