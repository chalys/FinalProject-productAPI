import { createUser } from "../database/models/user.model.js";

const initUsers = async () => {
  try {
    // Usuario administrador
    await createUser({
      username: 'admin',
      password: 'admin123',
      role: 'admin'
    });
    
    // Usuario normal
    await createUser({
      username: 'user',
      password: 'user123',
      role: 'user'
    });
    
    console.log('✅ Usuarios iniciales creados exitosamente');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear usuarios iniciales:', error.message);
    process.exit(1);
  }
};

initUsers();