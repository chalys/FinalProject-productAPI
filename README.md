# 🛍️ FinalProject-productAPI
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-4.x-lightgrey?logo=express&logoColor=white) ![Firebase](https://img.shields.io/badge/Firestore-10.x-orange?logo=firebase&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-9.x-red?logo=jsonwebtokens&logoColor=white)
## 📌 Descripción del proyecto

Este proyecto implementa una API REST para la administración de productos en un catálogo digital. La API permite operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos, con autenticación JWT y almacenamiento en Firestore de Firebase.

## 🚀 Instalación
### Clonar repositorio:
```
    git clone https://github.com/chalys/FinalProject-productAPI
    cd FinalProject-productAPI
```
### Instalar dependencias:
```
    npm install
```
### Configuración de Firebase:
* Crea un proyecto en Firebase Console
* Ve a "Configuración del proyecto" > "Tus aplicaciones" > "Web"
* Registra tu app y copia los datos de configuración

### Configurar variables de entorno:
```
    PORT=3000
    JWT_SECRET=tu_clave_secreta
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
### Endpoints de Productos
* GET /api/products - Listar todos los productos
* GET /api/products/:id - Obtener un producto por ID
* POST /api/products/create - Crear nuevo producto (requiere admin)
* PUT /api/products/:id - Actualizar producto (requiere admin)
* DELETE /api/products/:id - Eliminar producto (requiere admin)
### Endpoints de Autenticación
* POST /auth/login - Iniciar sesión y obtener token
## 🛠️ Tecnologías
* Node.js
* Express
* Firebase/Firestore
* JWT (JSON Web Tokens)
* CORS
* Dotenv