import express from 'express';
import data from './data.js';

// Function that returns express app
const app = express();

//test for restarting backend server with save file
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
