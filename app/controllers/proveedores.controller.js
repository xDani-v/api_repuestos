// controllers/proveedoresController.js
const pool = require('../db');

const obtenerProveedores = async (req, res) => {
    try {
        const proveedores = await pool.query('SELECT * FROM proveedores');
        res.json(proveedores.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los proveedores' });
    }
};

const crearProveedor = async (req, res) => {
    const { nombre_empresa, contacto, correo, telefono, direccion } = req.body;
    try {
        await pool.query(
            'INSERT INTO proveedores (nombre_empresa, contacto, correo, telefono, direccion) VALUES ($1, $2, $3, $4, $5)',
            [nombre_empresa, contacto, correo, telefono, direccion]
        );
        res.status(201).json({ message: 'Proveedor creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el proveedor' });
    }
};

const actualizarProveedor = async (req, res) => {
    const { id } = req.params;
    const { nombre_empresa, contacto, correo, telefono, direccion } = req.body;
    try {
        await pool.query(
            'UPDATE proveedores SET nombre_empresa = $1, contacto = $2, correo = $3, telefono = $4, direccion = $5 WHERE proveedor_id = $6',
            [nombre_empresa, contacto, correo, telefono, direccion, id]
        );
        res.json({ message: 'Proveedor actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el proveedor' });
    }
};

const eliminarProveedor = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM proveedores WHERE proveedor_id = $1', [id]);
        res.json({ message: 'Proveedor eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el proveedor' });
    }
};

module.exports = {
    obtenerProveedores,
    crearProveedor,
    actualizarProveedor,
    eliminarProveedor,
};
