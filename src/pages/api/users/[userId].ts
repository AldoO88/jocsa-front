import type { NextApiRequest, NextApiResponse } from 'next';
import connectToDatabase from '@/lib/db/mongodb';
import User from '@/models/User.model';
import { jwtMiddleware } from '@/lib/middleware/jwt.middleware';
import bcrypt from 'bcryptjs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    await connectToDatabase();
    const { userId } = req.query;

    console.log('userId ',userId)

    if (req.method === 'GET') {
        try {
            const user = await User.findById(userId).select('firstName lastName phone imageUrl email');
            if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el usuario' });
        }
        return;
    }

    if (req.method === 'PUT') {
        try {
            // Si el body incluye currentPassword y newPassword, es cambio de contraseña
            const { action, currentPassword, newPassword, firstName, lastName, phone, imageUrl } = req.body;

            console.log('Request body:', req.body); // Loguea el cuerpo de la solicitud para depuración

            if ( action === 'changePassword' ) {
                if (!currentPassword || !newPassword) {
                    return res.status(400).json({ message: 'Se requieren la contraseña actual y la nueva contraseña.' });
                }
                // 1. Busca el usuario
                const user = await User.findById(userId).select('+password');
                if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

                // 2. Verifica la contraseña actual
                const isMatch = await bcrypt.compare(currentPassword, user.password);
                if (!isMatch) return res.status(400).json({ message: 'La contraseña actual es incorrecta.' });

                // 3. Hashea la nueva contraseña y actualiza
                const hashedPassword = await bcrypt.hash(newPassword, 10);
                user.password = hashedPassword;
                await user.save();

                return res.status(200).json({ message: 'Contraseña actualizada correctamente.' });
                }

            else if (action === 'updateProfile') {
                // Actualización de otros campos del perfil
                const user = await User.findById(userId);
                if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
                
                // Construimos un objeto con los campos a actualizar
                const updateFields: any = {}; // Usamos 'any' para permitir campos dinámicos 
                if (firstName !== undefined && firstName !== user.firstName) updateFields.firstName = firstName; // Solo actualizamos si el campo está definido
                if (lastName !== undefined && lastName !== user.lastName) updateFields.lastName = lastName; // Solo actualizamos si el campo está definido
                if (phone !== undefined && phone !== user.phone) updateFields.phone = phone;
                if (imageUrl !== undefined && imageUrl !== user.imageUrl) updateFields.imageUrl = imageUrl;

                console.log('Fields to update:', updateFields); // Loguea los campos que se van a actualizar para depuración
                if (Object.keys(updateFields).length === 0) {
                    console.log('No fields to update');
                    return res.status(400).json({ message: 'No se proporcionaron cambios para actualizar.' });
                }

                const updatedUser = await User.findByIdAndUpdate(
                    userId, // ID del usuario a actualizar
                    { $set: updateFields }, // Usamos $set para actualizar solo los campos proporcionados
                    { new: true, runValidators: true } // new: true devuelve el documento actualizado, runValidators: true asegura que se apliquen las validaciones del esquema
                ).select('-password');

                if (!updatedUser) {
                    return res.status(404).json({ message: 'Usuario no encontrado' });
                }

                res.status(200).json({ user: updatedUser });
                    
            }
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            res.status(500).json({ message: 'Error al actualizar usuario' });
        }
        return;
    }
    res.status(405).json({ message: 'Método no permitido' });

};

export default jwtMiddleware(handler);