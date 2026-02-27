// src/pages/api/auth/verify.ts
import type { NextApiRequest } from 'next';
import { jwtMiddleware } from '@/lib/middleware/jwt.middleware';
import connectToDatabase from '@/lib/db/mongodb';
import users from '@/models/User.model';

type AutenticatedRequest = NextApiRequest & { user: { userId: string } }; // Esta linea de codigo es para tipar la solicitid autenticada (con token) en la función de api

const verifyHandler = async (req: AutenticatedRequest, res: any) => {
  try {
    await connectToDatabase(); // Conectamos a la base de datos
    if(!req.user) { // Si el usuario no está autenticado, lanzamos un error 401
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const userId = req.user.userId; // Obtenemos el ID del usuario
    const user = await users.findById(userId).select('-password'); // Buscamos el usuario en la base de datos por su ID y seleccionamos solo su ID y email para evitar que el password se envíe en la respuesta
    if(!user) { // Si el usuario no existe, lanzamos un error 404
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ user }); // Retornamos el usuario
  } catch (error) {
    return res.status(500).json({ message: 'Error al verificar el token' });
  }
}; 

export default jwtMiddleware(verifyHandler as any); // Exportamos el handler envuelto en el middleware de JWT para proteger la ruta, any es para evitar problemas de tipado con el middleware, ya que jwtMiddleware espera un NextApiHandler pero verifyHandler tiene un tipo de solicitud personalizado (AutenticatedRequest) que incluye la información del usuario decodificada del token. Al usar 'as any', estamos diciendo a TypeScript que ignore el tipo específico de verifyHandler y lo trate como cualquier función, lo que permite que jwtMiddleware lo envuelva sin problemas de tipado.