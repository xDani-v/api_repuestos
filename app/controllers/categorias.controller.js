// controllers/categoriasController.js
const pool = require('../db');

const obtenerCategorias = async (req, res) => {
    try {
        const categorias = await pool.query('SELECT * FROM categorias');
        res.json(categorias.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
};

const crearCategoria = async (req, res) => {
    const { nombre } = req.body;
    try {
        await pool.query('INSERT INTO categorias (nombre) VALUES ($1)', [nombre]);
        res.status(201).json({ message: 'Categoría creada exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear la categoría' });
    }
};

const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
        await pool.query('UPDATE categorias SET nombre = $1 WHERE categoria_id = $2', [nombre, id]);
        res.json({ message: 'Categoría actualizada exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
};

const eliminarCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM categorias WHERE categoria_id = $1', [id]);
        res.json({ message: 'Categoría eliminada exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
};

module.exports = {
    obtenerCategorias,
    crearCategoria,
    actualizarCategoria,
    eliminarCategoria,
};
