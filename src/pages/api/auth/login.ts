import { NextApiHandler } from 'next'; // Importamos la función nextApiHandler de Next.js
import conectToDatabase from '@/lib/db/mongodb';
import User from '@/models/User.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const handler: NextApiHandler = async (req, res) =>{
    if(req.method !== 'POST') return res.status(405).end(); // Si el método no es POST, devolvemos un error 405 (Método no permitido)

    await conectToDatabase(); // Conectamos a la base de datos MongoDB ya que la función es asíncrona y debemos esperar a que se conecte

    const { email, password } = req.body; // Obtenemos el email y la contraseña del cuerpo de la solicitud
    
    if(!email || !password) return res.status(400).json({ message: 'Email and password are required' }); // Si no se proporcionan el email o la contraseña, devolvemos un error 400 (Solicitud incorrecta)

    try {
        const user = await User.findOne({ email }).select('+password');
        if(!user) return res.status(404).json({ message: 'User not found' }); // Si no se encuentra el usuario, devolvemos un error 404 (No encontrado)

        console.log(user);

        const isPasswordValid = await bcrypt.compare(password, user.password); // Comparamos la contraseña proporcionada con la almacenada en la base de datos
        if(!isPasswordValid) return res.status(401).json({ message: 'Invalid password' }); // Si la contraseña no es válida, devolvemos un error 401 (No autorizado)

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' } 
        ); // Generamos un token JWT con el ID y el email del usuario, utilizando una clave secreta y estableciendo una expiración de 1 hora

        const { password: _, ...userData } = user.toObject(); // Excluimos la contraseña del objeto de usuario que vamos a devolver
        
        res.status(200).json({ token, user: userData }); // Devolvemos el token y los datos del usuario (sin la contraseña)
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' }); // Si hay un error en el servidor, devolvemos un error 500 (Error interno del servidor)
    }
}

export default handler; // Exportamos el handler para que pueda ser utilizado como una función de API en Next.js