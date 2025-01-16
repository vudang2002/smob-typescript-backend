import express from 'express';
import pkg, { PoolClient } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const app = express();
const port = process.env.PORT || 5000;

// Create a new pool instance
const pool = new Pool({
  user: process.env.PGUSER || 'postgres',
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'wecommit',
  password: process.env.PGPASSWORD || '30112002',
  port: parseInt(process.env.PGPORT || '5433', 10),
});

// Test the database connection
pool.connect(
  (err: Error | undefined, client: PoolClient | undefined, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    if (client) {
      client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query', err.stack);
        }
        console.log('Connected to the database:', result.rows);
      });
    }
  },
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
