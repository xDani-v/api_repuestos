// routes/pedidosRoutes.js
const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidos.contorller');

// Ruta para obtener todos los pedidos
router.get('/', pedidosController.obtenerPedidos);

// Ruta para crear un nuevo pedido
router.post('/', pedidosController.crearPedido);

// Ruta para actualizar un pedido existente
router.put('/:id', pedidosController.actualizarPedido);

// Ruta para eliminar un pedido
router.delete('/:id', pedidosController.eliminarPedido);

module.exports = router;
