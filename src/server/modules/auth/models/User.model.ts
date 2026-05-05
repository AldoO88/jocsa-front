import { Schema, model, models } from "mongoose";
import { customAlphabet } from 'nanoid';

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema({

    customerNumber: {
        type: String,
        unique: true,
        // Usamos una función `default` para generar el valor al crear el documento.
        default: () => {
            // Creamos un generador personalizado de nanoid.
            // '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ' -> El set de caracteres a usar.
            // 8 -> La longitud del ID.
            const nanoid = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', 8);
            return `CUS-${nanoid()}`; // Añadimos un prefijo "CUS-" para identificarlo fácilmente
        },
    },
    // --- Información Básica (Requerida para Login) ---

    email: {
        type: String,
        required: [true, 'The email field is required.'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'The password field is required.'],
        select: false, // Por defecto, no seleccionamos la contraseña en las consultas
    },

    // --- Información de Contacto (Opcional) ---
    firstName: { 
      type: String, 
      trim: true 
    },
    lastName: { 
      type: String, 
      trim: true 
    },
    phone: { 
      type: String, 
      trim: true 
    },
    imageUrl: {
        type: String,
        default: null, // Por defecto no tiene imagen
    },

    // --- Datos Fiscales para Facturación (Completamente Opcional) ---
    // Agrupamos todos los datos fiscales en un solo objeto para mayor orden.
    datosFiscales: {
        razonSocial: { type: String, trim: true },
        rfc: {
            type: String,
            uppercase: true,
            trim: true,
            unique: true,
            // `sparse` es crucial: permite que muchos usuarios no tengan RFC,
            // pero si uno lo tiene, debe ser único.
            sparse: true, 
        },
        regimenFiscal: { type: String }, // Ej: '601'
        usoCFDI: { type: String },       // Ej: 'G03'
    },
    isActive: { type: Boolean, default: true }, // Indica si el usuario está activo o no
}, {
    timestamps: true, // Añade createdAt y updatedAt
});

export default models.User || model('User', userSchema);