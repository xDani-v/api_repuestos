const pool = require('../db');

const obtenerVentasPorCliente = async (req, res) => {
    try {
        const query = `
        SELECT c.nombre AS cliente, SUM(p.total) AS total_ventas
        FROM clientes c
        JOIN pedidos p ON c.cliente_id = p.cliente_id
        GROUP BY c.cliente_id, c.nombre
        ORDER BY total_ventas DESC;
      `;
        const results = await pool.query(query);
        res.json(results.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

const obtenerProductosMasVendidos = async (req, res) => {
    try {
        const query = `
        SELECT r.nombre AS producto, SUM(d.cantidad) AS cantidad_vendida
        FROM repuestos r
        JOIN detalle_pedidos d ON r.repuesto_id = d.repuesto_id
        GROUP BY r.repuesto_id, r.nombre
        ORDER BY cantidad_vendida DESC;
      `;
        const results = await pool.query(query);
        res.json(results.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

const obtenerClientesConMasCompras = async (req, res) => {
    try {
        const query = `
        SELECT c.cliente_id, c.nombre AS cliente, COUNT(p.pedido_id) AS cantidad_compras
        FROM clientes c
        JOIN pedidos p ON c.cliente_id = p.cliente_id
        GROUP BY c.cliente_id, c.nombre
        ORDER BY cantidad_compras DESC;
      `;
        const results = await pool.query(query);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

const ventaPorRepuesto = async (req, res) => {
    try {
        const query = `
        SELECT r.nombre, SUM(p.total) AS total_ventas
        FROM pedidos p
        INNER JOIN detalle_pedidos dp ON p.pedido_id = dp.pedido_id
        INNER JOIN repuestos r ON dp.repuesto_id = r.repuesto_id
        GROUP BY r.nombre
        ORDER BY total_ventas DESC;
      `;
        const results = await pool.query(query);
        res.status(200).json(results.rows); // Enviar resultados al cliente
    } catch (error) {
        console.error('Error en la consulta:', error);
        res.status(500).json({ error: 'Error al obtener los datos' }); // Enviar respuesta de error al cliente
    }
};
module.exports = {
    obtenerVentasPorCliente,
    obtenerProductosMasVendidos,
    obtenerClientesConMasCompras,
    ventaPorRepuesto
};
