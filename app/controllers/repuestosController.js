const pool = require('../db');

const obtenerRepuestos = async (req, res) => {
    try {
        const repuestos = await pool.query('SELECT * FROM repuestos');
        res.json(repuestos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los repuestos' });
    }
};

module.exports = {
    obtenerRepuestos
};