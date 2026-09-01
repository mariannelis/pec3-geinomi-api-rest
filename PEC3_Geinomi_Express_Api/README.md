# PEC 3 · API REST Geinomi

API RESTful para **Geinomi**, una tienda online de productos outdoor, mochilas, bolsas, camping, senderismo y accesorios de montaña.

El proyecto usa la base de datos de la PEC 2 en MongoDB Atlas:

- `users`
- `categories`
- `products`
- `orders`
- `reviews`

La entidad principal del CRUD es `products`, pero también se incluyen rutas CRUD para las demás colecciones.

## Tecnologías

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Dotenv
- CORS
- Helmet
- Morgan
- Winston
- Nodemon
- Vercel

## Instalación

```bash
npm install
```

Crea un archivo `.env` en la raíz del proyecto:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb+srv://geinomi_user:Geinomi12345@clustergeinomi.yqc9vdp.mongodb.net/geinomi_db?retryWrites=true&w=majority&appName=ClusterGeinomi
JWT_SECRET=geinomi_secret_key_demo
```

Ejecuta el servidor:

```bash
npm run dev
```

## Endpoints

| Método | Endpoint | Descripción |
|---|---|---|
| GET | `/` | Mensaje inicial |
| GET | `/api` | Información de la API |
| GET | `/api/products` | Obtener productos |
| GET | `/api/products/:id` | Obtener producto por ID |
| POST | `/api/products` | Crear producto |
| PUT | `/api/products/:id` | Actualizar producto |
| DELETE | `/api/products/:id` | Eliminar producto |
| GET | `/api/users` | Obtener usuarios |
| GET | `/api/categories` | Obtener categorías |
| GET | `/api/orders` | Obtener pedidos |
| GET | `/api/reviews` | Obtener reseñas |

Todas las colecciones tienen CRUD completo con la estructura:

```txt
GET    /api/coleccion
GET    /api/coleccion/:id
POST   /api/coleccion
PUT    /api/coleccion/:id
DELETE /api/coleccion/:id
```

## Diagrama Mermaid

```mermaid
flowchart TD
    Client[Cliente / Postman / navegador] --> Express[API Express]
    Express --> Routes[Rutas]
    Routes --> Controllers[Controladores]
    Controllers --> Models[Modelos Mongoose]
    Models --> Atlas[(MongoDB Atlas)]
    Express --> NotFound[Middleware 404]
    Express --> ErrorHandler[Middleware 500]
```

## Pruebas

Se incluyen:

- `requests.http`
- `geinomi.postman_collection.json`

## Despliegue en Vercel

1. Subir el proyecto a GitHub.
2. Conectar el repositorio con Vercel.
3. Configurar las variables de entorno en Vercel:
   - `MONGODB_URI`
   - `NODE_ENV=production`
   - `JWT_SECRET`
4. Probar la URL desplegada.
URL:
Repositorio GitHub:
https://github.com/mariannelis/pec3-geinomi-api-rest

API desplegada en Vercel:
https://pec3-geinomi-api-rest.vercel.app

Endpoint principal:
https://pec3-geinomi-api-rest.vercel.app/api/products

## Seguridad
No subir el archivo `.env` a GitHub. Solo se entrega `.env.example`.
