// controllers/clientesController.js
const pool = require('../db');

const obtenerClientes = async (req, res) => {
    try {
        const clientes = await pool.query('SELECT * FROM clientes');
        res.json(clientes.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

const crearCliente = async (req, res) => {
    const { nombre, correo, telefono, direccion, rol_id } = req.body;
    try {
        await pool.query(
            'INSERT INTO clientes (nombre, correo, telefono, direccion, rol_id) VALUES ($1, $2, $3, $4, $5)',
            [nombre, correo, telefono, direccion, rol_id]
        );
        res.status(201).json({ message: 'Cliente creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

const actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, correo, telefono, direccion, rol_id } = req.body;
    try {
        await pool.query(
            'UPDATE clientes SET nombre = $1, correo = $2, telefono = $3, direccion = $4, rol_id = $5 WHERE cliente_id = $6',
            [nombre, correo, telefono, direccion, rol_id, id]
        );
        res.json({ message: 'Cliente actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

const eliminarCliente = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM clientes WHERE cliente_id = $1', [id]);
        res.json({ message: 'Cliente eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};

module.exports = {
    obtenerClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
};
