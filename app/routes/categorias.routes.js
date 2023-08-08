const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categorias.controller');

// Ruta para obtener todas las categorías
router.get('/', categoriasController.obtenerCategorias);

// Ruta para crear una nueva categoría
router.post('/', categoriasController.crearCategoria);

// Ruta para actualizar una categoría existente
router.put('/:id', categoriasController.actualizarCategoria);

// Ruta para eliminar una categoría
router.delete('/:id', categoriasController.eliminarCategoria);

module.exports = router;