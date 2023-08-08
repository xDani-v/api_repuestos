// routes/detallePedidosRoutes.js
const express = require('express');
const router = express.Router();
const detallePedidosController = require('../controllers/detallePedidos.controller');

// Ruta para obtener todos los detalles de pedidos
router.get('/', detallePedidosController.obtenerDetallePedidos);

// Ruta para crear un nuevo detalle de pedido
router.post('/', detallePedidosController.crearDetallePedido);

// Ruta para actualizar un detalle de pedido existente
router.put('/:id', detallePedidosController.actualizarDetallePedido);

// Ruta para eliminar un detalle de pedido
router.delete('/:id', detallePedidosController.eliminarDetallePedido);

module.exports = router;