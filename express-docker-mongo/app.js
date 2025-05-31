const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/testdb';

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Додаємо middleware для парсингу JSON у тілі запиту
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express running in Docker!');
});

// POST-обробник
app.post('/test-post', (req, res) => {
  // Виведемо тіло запиту в консоль
  console.log('Received POST data:', req.body);
  res.json({
    message: 'POST запит успішно отримано!',
    yourData: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
