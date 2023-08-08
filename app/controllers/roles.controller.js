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

const crearRol = async (req, res) => {
    const { nombre } = req.body;
    try {
        await pool.query('INSERT INTO roles (nombre) VALUES ($1)', [nombre]);
        res.status(201).json({ message: 'rol creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear rol' });
    }
};

const actualizarRol = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        await pool.query('UPDATE roles SET nombre = $1 WHERE id = $2', [nombre, id]);
        res.json({ message: 'rol actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el rol' });
    }
};

const eliminarRol = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM roles WHERE id = $1', [id]);
        res.json({ message: 'rol eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el rol' });
    }
};

module.exports = {
    obtenerRoles,
    crearRol,
    actualizarRol,
    eliminarRol,
};
