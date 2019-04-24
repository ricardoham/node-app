const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.use(express.static(__dirname + '/public'));
// console.log(__dirname)

app.listen(PORT, () => {
  console.log('Express server started!' + ' on port: ' + PORT);
});
