const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController');

// Obtener todos los roles
router.get('/', rolesController.obtenerRoles);

// Otras rutas específicas para /roles van aquí

module.exports = router;