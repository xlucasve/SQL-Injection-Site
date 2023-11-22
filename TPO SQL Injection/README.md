# SQL Injection Testing Site

- Aplicación web para poder practicar ataques SQL, y aprender como evitarlos utilizando queries parametrizadas al momento a llamar a la base de datos.

Desarrollado utilizando:

Backend: NodeJS

Frontend: React.js

Base de Datos: Microsoft SQL

Desarrollado por:

- Mendieta, Juan Ignacio
- Indurain Moneo, Ignacio
- Rapetti, Santiago Elian
- Von Elm, Lucas

## Requerimientos para instalación

- Microsoft SQL 2022
- Node.js 20.9.0

## Configuración Backend y Base de Datos

1. Hostear Microsoft SQL localmente mediante Docker.
2. Crear la base de datos 'Injection'.
3. En la aplicación modificar el archivo 'controller.js' con la configuración de su base de datos.

```bash
SQL-Injection-Site/back/controllers/controller.js
```

```bash
const sqlConfig = {
  user: "user",
  password: "password",
  database: "Injection",
  server: "localhost",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};
```

4. Lanzar el back ejecutando el archivo 'app.js'.

## Configuración Frontend

1. Abrir proyecto 'front' desde una terminal (O abrirlo con Visual Studio Code y usar la terminal integrada)
2. Instalar las dependencias mediante el siguiente comando:

```bash
npm install
```

3. Lanzar proyecto:

```bash
npm start
```

## URLs Locales

ENDPOINT para atacar: http://localhost:8090/injection
