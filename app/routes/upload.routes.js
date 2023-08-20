
const express = require('express')
const multer = require('multer');
const router = express.Router();


const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dk3nq4wro',
    api_key: '235447223517151',
    api_secret: 'boRtvtTllFO0nKsKXcdNT_qjOZU'
});


const upload = multer({ dest: 'uploads' });


router.post('/', upload.single('recfile'), async (req, res) => {
    try {
        console.log(req.file); // Verifica si req.file.path está definido correctamente

        if (!req.file) {
            return res.status(400).json({ message: 'No se proporcionó ninguna imagen.' });
        }

        const result = await cloudinary.uploader.upload(req.file.path);
        console.log(result); // Verifica el resultado de la carga a Cloudinary

        return res.json(result.url);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Ocurrió un error al subir la imagen.' });
    }
});


module.exports = router;