// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();
const port = 3000; // You can change the port as needed

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data (you can replace this with a database)
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// Route to get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Route to get a specific item by ID
app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(item => item.id === itemId);

  if (!item) {
    return res.status(404).send('Item not found');
  }

  res.json(item);
});

// Route to create a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).send('Item created successfully');
});

// Route to update an existing item
app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body;

  let itemIndex = items.findIndex(item => item.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).send('Item not found');
  }

  items[itemIndex] = { ...items[itemIndex], ...updatedItem };

  res.send('Item updated successfully');
});

// Route to delete an item
app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  items = items.filter(item => item.id !== itemId);

  res.send('Item deleted successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
