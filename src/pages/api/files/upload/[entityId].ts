import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';
import formidable, { File } from 'formidable'
import fs from 'fs';
import { jwtMiddleware } from '@/lib/middleware/jwt.middleware';

// Configura Cloudinary con tus credenciales
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Desactiva el bodyParser de Next.js para manejar archivos
export const config = {
    api: {
        bodyParser: false,
    },
};

// Helper para parsear el form como promesa usando formidable, evitando callbacks que complican el flujo async/await
const parseForm = (req: NextApiRequest) => 
    new Promise<{ fields: formidable.Fields; files: formidable.Files }>((resolve, reject) => { // Manejo de formulario con formidable y promesas esto es para evitar callbacks anidados
        const form = formidable({ multiples: false }); // multiples: false porque esperamos un solo archivo
        form.parse(req, (err, fields, files) => { // el parse maneja el request y extrae campos y archivos
        if (err) reject(err); // si hay error, rechaza la promesa, reject es como throw en async/await en este contexto
        else resolve({ fields, files }); // si todo va bien, resuelve la promesa con campos y archivos
        });
    });

const uploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') return res.status(405).end();

    try {

        const { fields, files } = await parseForm(req); // parseamos el form para obtener campos y archivos, el parseo significa que formidable ha procesado el request y extraido los datos

        let file = files.uploadedFile as File | File[];  // 'uploadedFile' es el nombre del campo en el form que contiene el archivo
        file = Array.isArray(file) ? file[0] : file; // si es un array, tomamos el primer archivo (aunque esperamos solo uno)
        const context = fields.context as string; // 'context' es un campo adicional en el form que indica el contexto de la subida
        const entityId = req.query.entityId as string; // 'entityId' viene de la URL, es el ID de la entidad asociada al archivo


        if (!file || !context || !entityId) {
        return res.status(400).json({ message: 'Faltan datos requeridos.' });
        }

    
      // Sube el archivo a Cloudinary
        console.log('Subiendo archivo a Cloudinary:', file.filepath);
        const uploadResult = await cloudinary.uploader.upload(file.filepath, {
            folder: `jocsa-autopartes/${context}/${entityId}`,
            public_id: `${Date.now()}_${file.originalFilename}`,
            resource_type: 'image',
            overwrite: true,
        });
        console.log('Resultado de Cloudinary:', uploadResult);

        if(!uploadResult.secure_url) {
            console.error('Cloudinary upload result:', uploadResult);
            return res.status(500).json({ message: 'Error al subir la imagen a Cloudinary.' });
            
        }

        // Elimina el archivo temporal
        fs.unlinkSync(file.filepath);

        return res.status(200).json({ documentUrl: uploadResult.secure_url });
    } catch (error) {
        console.error('Error during file upload:', error);
        return res.status(500).json({ message: 'Error al subir a Cloudinary.' });
    }

};

export default jwtMiddleware(uploadFile); // Protegemos la ruta con el middleware JWT