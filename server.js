const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/weather', (req, res) => {
  let data = fs.readFileSync('data.json', 'utf8');
  res.send(data);
});

app.post('/weather', (req, res) => {
  fs.writeFileSync('data.json', '{}');
  fs.writeFileSync('data.json', JSON.stringify(req.query));
  res.sendStatus(200).end();
});

app.listen(PORT, () => {
  console.log(`Server Started on PORT ${PORT}`);
});