const express = require('express');
const app = express();
const cors = require('cors'); // Importa el paquete cors
const rutas = require('./routes_app.routes');


// Configuración del middleware para manejar JSON
app.use(express.json());

// Configuración del middleware de CORS
app.use(cors());

// Rutas y controladores del API van aquí
app.use(rutas);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en el puerto ${PORT}`);
});