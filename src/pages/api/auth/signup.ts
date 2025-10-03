import type { NextApiHandler } from 'next'; // Importamos la función nextApiHandler de Next.js
import connectToDatabase from '@/lib/db/mongodb'; // Asegúrate de tener esta función para conectar a MongoDB
import User from '@/models/User.model';
import bcrypt from 'bcryptjs';

const handler: NextApiHandler = async (req, res) => {
    console.log('Received request:', req.method, req.body); // Logueamos el método y el cuerpo de la solicitud para depuración
    if(req.method !== 'POST') return res.status(405).end(); // Si el método no es POST, devolvemos un error 405 (Método no permitido)

    await connectToDatabase(); // Conectamos a la base de datos MongoDB ya que la función es asíncrona y debemos esperar a que se conecte

    const { firstName, lastName, email, phone, password, confirmPassword } = req.body; // Obtenemos los datos del cuerpo de la solicitud

    if(!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' }); // Si no se proporcionan todos los campos, devolvemos un error 400 (Solicitud incorrecta)
    }

    if(password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' }); // Si las contraseñas no coinciden, devolvemos un error 400 (Solicitud incorrecta)
    }

    if(password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long' }); // Si la contraseña es demasiado corta, devolvemos un error 400 (Solicitud incorrecta)
    }
    
    try{
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(409).json({ message: 'Email is already registered' }); // Si el email ya está registrado, devolvemos un error 409 (Conflicto)
        }

        const salt = await bcrypt.genSalt(10); // Generamos una sal para el hash de la contraseña (10 es un buen equilibrio entre seguridad y rendimiento), el salt es un string aleatorio que se añade a la contraseña antes de hashearla para mayor seguridad y el 10 hace referencia a la complejidad del hash
        const hashedPassword = await bcrypt.hash(password, salt); // Hasheamos la contraseña con la sal generada

        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            password: hashedPassword, // Guardamos la contraseña hasheada en la base de datos
        });
        
        await newUser.save(); // Guardamos el nuevo usuario en la base de datos

        return res.status(201).json({ message: 'User created successfully' }); // Devolvemos un mensaje de éxito con el código 201 (Creado)
    }catch(error) {
        console.error('Error checking existing user:', error);
        return res.status(500).json({ message: 'Internal server error' }); // Si hay un error en el servidor, devolvemos un error 500 (Error interno del servidor)
    }
}

export default handler; // Exportamos el handler para que pueda ser utilizado como una función de API en Next.js