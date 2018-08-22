const express = require('express');
const bodyparser = require('body-parser');

const server = express();
const PORT = process.env.PORT || 4020;

server.use(bodyparser.json());

server.post('/api/contact', (req, res) => {
  console.log(req.body);
  res.json({ success: true });
});

server.post('/api/register', (req, res)=> {
  res.json({
    id: 1,
    username: req.body.username
  });
});

server.post('/api/login', (req, res) => {
  res.json({
    id: 1,
    username: req.body.username
  });
});

server.get('/api/logout', (req, res) => {
  res.json({ success: true })
})

server.listen(PORT, () => {
  console.log(`${PORT} has been opened`)
});