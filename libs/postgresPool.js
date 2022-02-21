const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'dvergara',
  password: '123456789',
  database: 'my_store',
});

module.exports = pool;
