const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const todos = [
  {
    id: 1,
    description: 'Meet mom for lunch',
    completed: false,
  },
  {
    id: 2,
    description: 'Go to Market',
    completed: false,
  },
  {
    id: 3,
    description: 'Go to GYM',
    completed: true,
  }
];

app.get('/', (req, res) => {
  res.send('Todo API Root')
});

// GET todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log('Express listening on port: ' + PORT + '!');
});