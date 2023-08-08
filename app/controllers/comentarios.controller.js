// controllers/comentariosController.js
const pool = require('../db');

const obtenerComentarios = async (req, res) => {
    try {
        const comentarios = await pool.query('SELECT * FROM comentarios');
        res.json(comentarios.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los comentarios' });
    }
};

const crearComentario = async (req, res) => {
    const { contenido, usuario_id } = req.body;
    try {
        await pool.query('INSERT INTO comentarios (contenido, usuario_id) VALUES ($1, $2)', [contenido, usuario_id]);
        res.status(201).json({ message: 'Comentario creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el comentario' });
    }
};

const actualizarComentario = async (req, res) => {
    const { id } = req.params;
    const { contenido } = req.body;
    try {
        await pool.query('UPDATE comentarios SET contenido = $1 WHERE comentario_id = $2', [contenido, id]);
        res.json({ message: 'Comentario actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el comentario' });
    }
};

const eliminarComentario = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM comentarios WHERE comentario_id = $1', [id]);
        res.json({ message: 'Comentario eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el comentario' });
    }
};

module.exports = {
    obtenerComentarios,
    crearComentario,
    actualizarComentario,
    eliminarComentario,
};
