// controllers/repuestosController.js
const pool = require('../db');


const obtenerRepuestos = async (req, res) => {
    try {
        const repuestos = await pool.query('SELECT * FROM repuestos');
        res.json(repuestos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al obtener los repuestos' });
    }
};

const crearRepuesto = async (req, res) => {
    const { nombre, descripcion, precio, stock, categoria_id, proveedor_id, imgUrl } = req.body;

    try {
        // Insertar el repuesto en la base de datos con la URL de la imagen
        await pool.query(
            'INSERT INTO repuestos (nombre, descripcion, precio, stock, categoria_id, proveedor_id, imagen_url) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [nombre, descripcion, precio, stock, categoria_id, proveedor_id, imgUrl]
        );

        res.status(201).json({ message: 'Repuesto creado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al crear el repuesto' });
    }
};

const actualizarRepuesto = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, precio, stock, categoria_id, proveedor_id, imgUrl } = req.body;

    try {

        // Actualizar los datos del repuesto en la base de datos, incluida la URL de la imagen si está presente
        let updateQuery = `UPDATE repuestos SET nombre = $1, descripcion = $2, precio = $3, stock = $4, categoria_id = $5, proveedor_id = $6, imagen_url = $7
        where repuesto_id=$8`;

        const queryParams = [nombre, descripcion, precio, stock, categoria_id, proveedor_id, imgUrl, id];

        await pool.query(updateQuery, queryParams);

        res.json({ message: 'Repuesto actualizado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al actualizar el repuesto' });
    }
}


const eliminarRepuesto = async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM repuestos WHERE repuesto_id = $1', [id]);
        res.json({ message: 'Repuesto eliminado exitosamente' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Error al eliminar el repuesto' });
    }
};

module.exports = {
    obtenerRepuestos,
    crearRepuesto,
    actualizarRepuesto,
    eliminarRepuesto,
};
