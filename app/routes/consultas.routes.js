const express = require('express');
const router = express.Router();
const consultasController = require('../controllers/consultas.controller');

// Ruta para obtener todas las categorías
router.get('/c1', consultasController.obtenerClientesConMasCompras);
router.get('/c2', consultasController.obtenerProductosMasVendidos);
router.get('/c3', consultasController.ventaPorRepuesto);
router.get('/c4', consultasController.obtenerVentasPorCliente);



module.exports = router;