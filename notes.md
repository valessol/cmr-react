```
npm create vite@latest
npm i
npm i -D tailwindcss autoprefixer postcss
npx tailwindcss init -p // crea los archivos tailwind.config.cjs y postcss.config.cjs  (cjs = common js, extensión que utiliza node para manejar los paquetes)
```

Configurar tailwind:

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
