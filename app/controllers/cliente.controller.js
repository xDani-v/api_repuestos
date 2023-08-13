// controllers/clientesController.js
const pool = require('../db');

const obtenerClientes = async (req, res) => {
    try {
        const clientes = await pool.query('SELECT * FROM clientes');
        res.json(clientes.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
};

const crearCliente = async (req, res) => {
    const { nombre, correo, telefono, direccion, rol_id } = req.body;
    try {
        await pool.query(
            'INSERT INTO clientes (nombre, correo, telefono, direccion, rol_id) VALUES ($1, $2, $3, $4, $5)',
            [nombre, correo, telefono, direccion, rol_id]
        );
        res.status(201).json({ message: 'Cliente creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el cliente' });
    }
};

const actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, correo, telefono, direccion, rol_id } = req.body;
    try {
        await pool.query(
            'UPDATE clientes SET nombre = $1, correo = $2, telefono = $3, direccion = $4, rol_id = $5 WHERE cliente_id = $6',
            [nombre, correo, telefono, direccion, rol_id, id]
        );
        res.json({ message: 'Cliente actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
};

const eliminarCliente = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM clientes WHERE cliente_id = $1', [id]);
        res.json({ message: 'Cliente eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
};


const login = async (req, res) => {

    const { correo, password } = req.body;

    const result = await pool.query(
        'SELECT * FROM clientes WHERE correo = $1 AND password = $2 AND rol_id = 3',
        [correo, password]
    );

    if (result.rows.length > 0) {
        const user = result.rows[0];
        // Aquí puedes generar un token de autenticación si lo deseas
        res.status(200).json(user);
    } else {
        res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos' });
    }
};

module.exports = {
    obtenerClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    login
};
