// routes/proveedoresRoutes.js
const express = require('express');
const router = express.Router();
const proveedoresController = require('../controllers/proveedores.controller');

// Ruta para obtener todos los proveedores
router.get('/', proveedoresController.obtenerProveedores);

// Ruta para crear un nuevo proveedor
router.post('/', proveedoresController.crearProveedor);

// Ruta para actualizar un proveedor existente
router.put('/:id', proveedoresController.actualizarProveedor);

// Ruta para eliminar un proveedor
router.delete('/:id', proveedoresController.eliminarProveedor);

module.exports = router;
