```
npm create vite@latest
npm i
npm i -D tailwindcss autoprefixer postcss
npx tailwindcss init -p // crea los archivos tailwind.config.cjs y postcss.config.cjs  (cjs = common js, extensión que utiliza node para manejar los paquetes)
```

#### Configurar tailwind:

```
{
    content: [
        './index.html',
        './src/**/*.{js, ts, jsx, tsx}'
    ],
}
```

Añadimos las directivas de tailwind al index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Variables de entorno en Vite

Las variables de entorno deben comenzar con VITE\_ para que Vite pueda reconocerlas como tales. Para acceder a ellas, se realiza de la siguiente manera:

```
import.meta.env.VITE_API_URL
```

#### El método formData

El formData permite acceder a los datos de un formulario antes de ser enviado al servidor para realizar la acción correspondiente.
Como método, existe dentro del prototype de la request del formulario:

```
const formData = await request.formData()
```

Para acceder a los datos, no basta con hacer un `console.log(formData)`, sino que nuevamente hay que hacer uso de los métdodos del objeto FormData, aunque tsmbién existen algunas formas adicionales para acceder:

```
formData.get('name')
// Obtener todos los datos:
// Método 1:
console.log({...formData})
// Método 2:
const datos = Object.fromEntries(formData);
console.log(datos)
```
