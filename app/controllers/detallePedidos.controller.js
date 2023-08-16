// controllers/detallePedidosController.js
const pool = require('../db');

const obtenerDetallePedidos = async (req, res) => {
    try {
        const detallePedidos = await pool.query('SELECT * FROM detalle_pedidos');
        res.json(detallePedidos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los detalles de pedidos' });
    }
};

const obtenerDetallePedidosId = async (req, res) => {
    const { id } = req.params;
    try {
        const detallePedidos = await pool.query('SELECT * FROM detalle_pedidos where pedido_id = $1', [id]);
        res.json(detallePedidos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los detalles de pedidos' });
    }
};

const crearDetallePedido = async (req, res) => {
    const { pedido_id, repuesto_id, cantidad, precio } = req.body;
    try {
        await pool.query(
            'INSERT INTO detalle_pedidos (pedido_id, repuesto_id, cantidad, precio) VALUES ($1, $2, $3, $4)',
            [pedido_id, repuesto_id, cantidad, precio]
        );
        res.status(201).json({ message: 'Detalle de pedido creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el detalle de pedido' });
    }
};

const actualizarDetallePedido = async (req, res) => {
    const { id } = req.params;
    const { pedido_id, repuesto_id, cantidad, precio } = req.body;
    try {
        await pool.query(
            'UPDATE detalle_pedidos SET pedido_id = $1, repuesto_id = $2, cantidad = $3, precio = $4 WHERE detalle_id = $5',
            [pedido_id, repuesto_id, cantidad, precio, id]
        );
        res.json({ message: 'Detalle de pedido actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el detalle de pedido' });
    }
};

const eliminarDetallePedido = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM detalle_pedidos WHERE detalle_id = $1', [id]);
        res.json({ message: 'Detalle de pedido eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el detalle de pedido' });
    }
};

module.exports = {
    obtenerDetallePedidos,
    crearDetallePedido,
    actualizarDetallePedido,
    eliminarDetallePedido,
    obtenerDetallePedidosId
};
