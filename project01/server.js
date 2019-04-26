const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const todos = [];
const todoNextId = 1;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Todo API Root')
});

// GET todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/todos/:id', (req, res) => {
  const todoId = parseInt(req.params.id, 10);
  let matchedTodo;

  todos.forEach(todo => {
    if (todoId === todo.id) {
      matchedTodo = todo;
    }
  });

  if (matchedTodo) {
    res.json(matchedTodo);
  } else {
    res.status(404).send();
  }
});

// POST /todos
app.post('/todos', (req, res) => {
  let body = req.body;

  body.id = todoNextId++;
  todos.push(body);
  res.json(body);
})

app.listen(PORT, () => {
  console.log('Express listening on port: ' + PORT + '!');
});
