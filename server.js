const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Dummy users data
const users = [
  { id: 1, name: "Sumit Singh" },
  { id: 2, name: "Anjali Verma" },
  { id: 3, name: "Ravi Kumar" }
];

// Route: Home Page
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Route: About Page
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Route: Users JSON
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
