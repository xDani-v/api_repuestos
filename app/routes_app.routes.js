const express = require('express');
const router = express.Router();
const repuestosRoutes = require('./routes/repuestos.routes');
const rolesRoutes = require('./routes/roles.routes');
const categoriasRoutes = require('./routes/categorias.routes')
const clientesRoutes = require('./routes/cliente.routes');
const comentariosRoutes = require('./routes/comentarios.routes');
const detallePedidosRoutes = require('./routes/detallePedidos.routes');
const pedidosRoutes = require('./routes/pedidos.routes');
const proveedoresRoutes = require('./routes/proveedor.routes');
const consultasRoutes = require('./routes/consultas.routes');

router.use('/categorias', categoriasRoutes);
router.use('/clientes', clientesRoutes);
router.use('/comentarios', comentariosRoutes);
router.use('/detallesP', detallePedidosRoutes);
router.use('/pedidos', pedidosRoutes);
router.use('/proveedor', proveedoresRoutes);
router.use('/repuestos', repuestosRoutes);
router.use('/roles', rolesRoutes);
router.use('/consultas', consultasRoutes);

module.exports = router;