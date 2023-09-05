// routes/repuestosRoutes.js
const express = require('express');
const router = express.Router();
const repuestosController = require('../controllers/repuestos.controller');


// Ruta para obtener todos los repuestos
router.get('/', repuestosController.obtenerRepuestos);
router.get('/:id', repuestosController.obtenerRepuestosId);

// Ruta para crear un nuevo repuesto
router.post('/', repuestosController.crearRepuesto);

// Ruta para actualizar un repuesto existente
router.put('/:id', repuestosController.actualizarRepuesto);

// Ruta para eliminar un repuesto
router.delete('/:id', repuestosController.eliminarRepuesto);

module.exports = router;
