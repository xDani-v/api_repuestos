// controllers/pedidosController.js
const pool = require('../db');

const obtenerPedidos = async (req, res) => {
    try {
        const pedidos = await pool.query('SELECT * FROM pedidos');
        res.json(pedidos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los pedidos' });
    }
};

const crearPedido = async (req, res) => {
    const { cliente_id, fecha_pedido, estado, total } = req.body;
    try {
        await pool.query(
            'INSERT INTO pedidos (cliente_id, fecha_pedido, estado, total) VALUES ($1, $2, $3, $4)',
            [cliente_id, fecha_pedido, estado, total]
        );
        res.status(201).json({ message: 'Pedido creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
};

const actualizarPedido = async (req, res) => {
    const { id } = req.params;
    const { cliente_id, fecha_pedido, estado, total } = req.body;
    try {
        await pool.query(
            'UPDATE pedidos SET cliente_id = $1, fecha_pedido = $2, estado = $3, total = $4 WHERE pedido_id = $5',
            [cliente_id, fecha_pedido, estado, total, id]
        );
        res.json({ message: 'Pedido actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el pedido' });
    }
};

const eliminarPedido = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM pedidos WHERE pedido_id = $1', [id]);
        res.json({ message: 'Pedido eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el pedido' });
    }
};

module.exports = {
    obtenerPedidos,
    crearPedido,
    actualizarPedido,
    eliminarPedido,
};
