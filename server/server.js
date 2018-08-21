const express = require('express');
const bodyparser = require('body-parser');

const server = express();
const PORT = process.env.PORT || 4020;

server.use(bodyparser.json());

server.post('/api/contact', (req, res) => {
  console.log(req.body);

  res.json({ success: true });
});

server.listen(PORT, () => {
  console.log(`${PORT} has been opened`)
});