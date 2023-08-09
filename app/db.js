const { Pool } = require('pg');
const dotenv = require('dotenv');

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Configura los detalles de conexión a la base de datos PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'true',
        sslmode: process.env.DB_SSL_MODE,
    },
});

module.exports = pool;