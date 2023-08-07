const express = require('express');
const router = express.Router();
const repuestosController = require('../controllers/repuestosController');

// Obtener todos los repuestos
router.get('/', repuestosController.obtenerRepuestos);

// Otras rutas específicas para /repuestos van aquí

module.exports = router;