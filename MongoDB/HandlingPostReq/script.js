const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/AnimeWatchList", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error("MongoDB Error:", err);
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connection successful');
});

app.get('/users', async (req, res) => {
  try {
    const data = await YourModel.find().toArray(); // Replace YourModel with your actual mongoose model
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.post('/anime', async (req, res) => {
  try {
    console.log(req.body);
    const result = await YourModel.create(req.body); // Replace YourModel with your actual mongoose model
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
