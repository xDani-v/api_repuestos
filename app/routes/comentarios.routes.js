// routes/comentariosRoutes.js
const express = require('express');
const router = express.Router();
const comentariosController = require('../controllers/comentarios.controller');

// Ruta para obtener todos los comentarios
router.get('/', comentariosController.obtenerComentarios);

// Ruta para crear un nuevo comentario
router.post('/', comentariosController.crearComentario);

// Ruta para actualizar un comentario existente
router.put('/:id', comentariosController.actualizarComentario);

// Ruta para eliminar un comentario
router.delete('/:id', comentariosController.eliminarComentario);

module.exports = router;
