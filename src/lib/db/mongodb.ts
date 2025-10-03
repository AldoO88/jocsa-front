// src/lib/db/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jocsa-ecommerce-db';

// Extiende la interfaz global para TypeScript
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: { // Usamos var para evitar errores de redeclaración
    conn: typeof mongoose | null; // La conexión actual o null si no está conectada
    promise: Promise<typeof mongoose> | null; // La promesa de conexión en curso o null si no hay ninguna
  } | undefined; // Puede ser undefined la primera vez que se accede
}

let cached = global.mongooseCache || { conn: null, promise: null }; // Inicializamos el caché si no existe
global.mongooseCache = cached;  // Asignamos el caché a la variable global para mantener el estado entre llamadas

// Función para conectar a la base de datos MongoDB
async function connectToDatabase() {
  if (cached.conn) { // Si ya estamos conectados, devolvemos la conexión existente
    return cached.conn; // Retornamos la conexión existente
  }
  if (!cached.promise) { // Si no hay una promesa de conexión en curso, la creamos
    cached.promise = mongoose.connect(MONGODB_URI, { // Conectamos a MongoDB con las opciones recomendadas
      bufferCommands: false, // Desactivamos el almacenamiento en búfer de comandos para evitar problemas con operaciones en cola
    });
  }
  try {
    cached.conn = await cached.promise;// Esperamos a que la promesa de conexión se resuelva y almacenamos la conexión
    return cached.conn; // Retornamos la nueva conexión
  } catch (e) {
    cached.promise = null; // Si hay un error, reseteamos la promesa para permitir reintentos futuros
    throw e;
  }
}

export default connectToDatabase;