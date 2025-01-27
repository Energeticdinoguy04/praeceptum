// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON data

// Sample route
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from Express!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`SERVER ONLINE - PORT: ${PORT}`));

