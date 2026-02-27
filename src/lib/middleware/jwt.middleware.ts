//src/lib/middleware/jwt.middleware.ts
import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import jwt from 'jsonwebtoken';

//interface para extender el tipo de solicitud (request) con la información del usuario decodificada del token JWT
interface AuthenticatedRequest extends NextApiRequest {
  user: {
    userId: string;
    customerNumber: string;
  } // El payload del token decodificado
}

// Middleware para verificar el token JWT en las solicitudes entrantes (requests) y extraer el usuario del token
export const jwtMiddleware = (handler: NextApiHandler) => {
  return async (req: AuthenticatedRequest, res: NextApiResponse) => { // Retornamos una función async
    try {
      const authHeader = req.headers.authorization; // Obtenemos la cabecera de autorización
      if (!authHeader || !authHeader.startsWith('Bearer ')) { // Si no existe la cabecera o no empieza con 'Bearer ', lanzamos un error
        return res.status(401).json({ message: 'No token provided' }); 
        // Retornamos un error 401
      }

      const token = authHeader.split(' ')[1]; // Extraemos el token de la cabecera
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string); // Verificamos el token
      req.user = decodedToken as AuthenticatedRequest['user']; // Asignamos el usuario al objeto de solicitud
      return handler(req, res); // Llamamos al siguiente middleware o handler
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' }); // Retornamos un error 401
    }
  };
};

