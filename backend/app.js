const express = require('express');
const redis = require('redis');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  host: 'postgres',
  user: 'admin',
  password: 'password',
  database: 'mydb',
  port: 5432,
});

const client = redis.createClient({
  url: 'redis://redis:6379'
});

client.connect();

app.get('/', async (req, res) => {
  res.send('Backend API Running');
});

app.get('/health', async (req, res) => {
  res.json({
    status: 'UP'
  });
});

app.get('/db', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json(result.rows);
});

app.get('/redis', async (req, res) => {
  await client.set('message', 'Redis is working');

  const value = await client.get('message');

  res.json({
    redis: value
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});