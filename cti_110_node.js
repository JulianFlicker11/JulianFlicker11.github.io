const express = require('express');
const { Pool } = require('pg');
const app = express();

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres', // default username
  host: 'localhost',
  database: 'your_database_name', // e.g., 'school'
  password: 'your_password', // if you set one
  port: 5432,
});

// Enable CORS (if needed)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// API endpoint
app.get('/api/grades', async (req, res) => {
  try {
    const result = await pool.query('SELECT first_name, last_name, total_grade FROM students;');
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));