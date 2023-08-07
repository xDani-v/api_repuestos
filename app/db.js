const { Pool } = require('pg');

// Configura los detalles de conexión a la base de datos PostgreSQL
const pool = new Pool({
    user: 'postgres', // Reemplaza con tu nombre de usuario
    host: 'localhost', // Reemplaza con la dirección del servidor PostgreSQL (puedes usar 'localhost' si está en la misma máquina)
    database: 'bd_Repuestos', // Reemplaza con el nombre de tu base de datos
    password: 'root', // Reemplaza con tu contraseña (puedes dejarlo vacío si no hay contraseña)
    port: 5432 // Puerto por defecto de PostgreSQL
});

module.exports = pool;