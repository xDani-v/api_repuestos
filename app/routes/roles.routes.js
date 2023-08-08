const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles.controller');

// Ruta para obtener todas las categorías
router.get('/', rolesController.obtenerRoles);

// Ruta para crear una nueva categoría
router.post('/', rolesController.crearRol);

// Ruta para actualizar una categoría existente
router.put('/:id', rolesController.actualizarRol);

// Ruta para eliminar una categoría
router.delete('/:id', rolesController.eliminarRol);

module.exports = router;