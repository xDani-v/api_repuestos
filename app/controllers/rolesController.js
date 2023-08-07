const pool = require('../db');

const obtenerRoles = async (req, res) => {
    try {
        const roles = await pool.query('SELECT * FROM roles');
        res.json(roles.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los roles' });
    }
};

module.exports = {
    obtenerRoles
};