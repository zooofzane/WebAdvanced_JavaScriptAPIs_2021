const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

// routing
app.get('/', function(req, res) {
  res.send('Hello Class!');
});

app.get('/users', function(req, res) {
  res.send('Hello User!');
});

app.get('/students', function(req, res) {
  const students = [
    {
      name: 'Tony',
      email: 'tony@gmail.com'
    },
      {
      "name": "Jane",
      "email": "jane@mail.com"
    },
    {
      "name": "Jack",
      "email": "jack@mailtest.com"
    }
  ];

 res.json( JSON.stringify(students) );
});

app.listen(8002, function() {
  console.log('Example app listening on port 8002!');
});
