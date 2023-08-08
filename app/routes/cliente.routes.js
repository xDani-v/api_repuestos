// routes/clientesRoutes.js
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/cliente.controller');

// Ruta para obtener todos los clientes
router.get('/', clientesController.obtenerClientes);

// Ruta para crear un nuevo cliente
router.post('/', clientesController.crearCliente);

// Ruta para actualizar un cliente existente
router.put('/:id', clientesController.actualizarCliente);

// Ruta para eliminar un cliente
router.delete('/:id', clientesController.eliminarCliente);

module.exports = router;
