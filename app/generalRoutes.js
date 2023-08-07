const express = require('express');
const router = express.Router();
const repuestosRoutes = require('./routes/repuestosRoutes');
const rolesRoutes = require('./routes/rolesRoutes');

// Rutas comunes para /repuestos
router.use('/repuestos', repuestosRoutes);

// Rutas comunes para /roles
router.use('/roles', rolesRoutes);

module.exports = router;