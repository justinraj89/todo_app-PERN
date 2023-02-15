const Pool = require('pg').Pool;

// how to connect to a database
const pool = new Pool({
    user: 'justin',
    password: 'jooje...',
    host: 'localhost',
    port: 5432,
    database: 'perntodo'
});

module.exports = pool;