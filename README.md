# 🛍️ FinalProject-productAPI
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express&logoColor=white) ![Firebase](https://img.shields.io/badge/Firestore-10.x-orange?logo=firebase&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-9.x-red?logo=jsonwebtokens&logoColor=white) ![bcrypt](https://img.shields.io/badge/Bcrypt-5.x-blue?logo=bcrypt&logoColor=white)
## 📌 Descripción del proyecto

API REST segura para gestión de productos con autenticación JWT y almacenamiento en Firestore. Implementa un sistema completo de:

* Autenticación y autorización por roles (admin/user)
* CRUD completo de productos
* Arquitectura escalable en capas
* Manejo centralizado de errores
* Validación de datos

## 🚀 Instalación
### 1. Clonar repositorio:
```bash
    git clone https://github.com/chalys/FinalProject-productAPI
    cd FinalProject-productAPI
```
### 2. Instalar dependencias:
```bash
    npm install
```
### 3. Configuración de Firebase:
* Crea un proyecto en Firebase Console
* Ve a "Configuración del proyecto" > "Tus aplicaciones" > "Web"
* Registra tu app y copia los datos de configuración
* Habilita Firestore en modo de producción
### 4. Configurar variables de entorno:
```text
    PORT=3000
    NODE_ENV=development/production

    JWT_SECRET=tu_clave_secreta_jwt
    JWT_EXPIRES_IN=1h

    FIREBASE_API_KEY=tu_api_key
    FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
    FIREBASE_PROJECT_ID=tu_proyecto_id
    FIREBASE_STORAGE_BUCKET=tu_bucket.appspot.com
    FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
    FIREBASE_APP_ID=tu_app_id
```
### Iniciar el servidor:
```
    npm start
```
## 📚 Documentación de la API
### Autenticación
| Método        | Endpoint      | Descripción                    |Requiere Auth  |
|:-------------:|:-------------:|:------------------------------:|:-------------:|
| POST          | /auth/login   | Iniciar sesión (obtener token) | No            |
| POST          | /auth/register| Registrar nuevo usuario        | No            |
### Productos
| Método        | Endpoint            | Descripción                    |Requiere Auth  |Roles Permitidos  |
|:-------------:|:-------------------:|:------------------------------:|:-------------:|:----------------:|
| GET           | /api/products       | Listar todos los productos     | No            | -                |
| GET           | /api/products/:id   | Obtener producto por ID        | No            | -                |
| POST          | /api/products       | Crear nuevo producto           | Si            | admin, user      |
| PUT           | /api/products/:id   | Actualizar producto            | Si            | admin, user      |
| DELETE        | /api/products/:id   | Eliminar producto              | Si            | admin            |
## 🛠️ Estructura del Proyecto
```text
src/
├── config/          # Configuraciones
├── database/        # Modelos de base de datos
├── middlewares/     # Middlewares custom
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
└── controllers/     # Manejo de requests
```
## 🔒 Roles y Permisos
* Admin: Acceso completo (CRUD)
* User: Solo lectura y creación
* Público: Solo lectura
## 🧪 Pruebas con Postman
1. Importa la colección Postman incluida en /docs/FinalProject-productAPI.postman_collection.json
2. Configura las variables de entorno en Postman:
    * baseURL: http://localhost:3000
    * token: (se autollena al hacer login)

Flujo recomendado:

1. Registrar usuario o usar credenciales por defecto (admin/admin123)
2. Hacer login para obtener token
3. Probar endpoints protegidos
## 🛡️ Seguridad
* Autenticación JWT con expiración
* Hash de contraseñas con Bcrypt
* Validación de datos en todos los endpoints
* Manejo centralizado de errores
* Variables sensibles en .env
## 💻 Tecnologías Utilizadas
* Backend: Node.js, Express
* Base de datos: Firebase Firestore
* Autenticación: JWT, Bcrypt
* Seguridad: Helmet, CORS
* Variables de entorno: Dotenv
* Logging: Winston (opcional)