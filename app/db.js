const { Pool } = require('pg');

// Configura los detalles de conexión a la base de datos PostgreSQL
const pool = new Pool({
    user: 'fl0user', // Reemplaza con tu nombre de usuario
    host: 'ep-super-wave-00075584.ap-southeast-1.aws.neon.tech', // Reemplaza con la dirección del servidor PostgreSQL (puedes usar 'localhost' si está en la misma máquina)
    database: 'dbrepuestos', // Reemplaza con el nombre de tu base de datos
    password: 'LvBk61RwGUsI', // Reemplaza con tu contraseña (puedes dejarlo vacío si no hay contraseña)
    port: 5432,// Puerto por defecto de PostgreSQL
    ssl: {
        rejectUnauthorized: false, // Agrega esta línea para evitar problemas de certificados autofirmados (opcional)
        sslmode: 'require', // Esta opción establece la conexión con SSL
    },
});

module.exports = pool;