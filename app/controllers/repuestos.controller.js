// controllers/repuestosController.js
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

const crearRepuesto = async (req, res) => {
    const { nombre, descripcion, precio, stock, categoria_id, proveedor_id } = req.body;
    try {
        await pool.query(
            'INSERT INTO repuestos (nombre, descripcion, precio, stock, categoria_id, proveedor_id) VALUES ($1, $2, $3, $4, $5, $6)',
            [nombre, descripcion, precio, stock, categoria_id, proveedor_id]
        );
        res.status(201).json({ message: 'Repuesto creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el repuesto' });
    }
};

const actualizarRepuesto = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoria_id, proveedor_id } = req.body;
    try {
        await pool.query(
            'UPDATE repuestos SET nombre = $1, descripcion = $2, precio = $3, stock = $4, categoria_id = $5, proveedor_id = $6 WHERE repuesto_id = $7',
            [nombre, descripcion, precio, stock, categoria_id, proveedor_id, id]
        );
        res.json({ message: 'Repuesto actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el repuesto' });
    }
};

const eliminarRepuesto = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM repuestos WHERE repuesto_id = $1', [id]);
        res.json({ message: 'Repuesto eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el repuesto' });
    }
};

module.exports = {
    obtenerRepuestos,
    crearRepuesto,
    actualizarRepuesto,
    eliminarRepuesto,
};
