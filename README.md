# React Hola Mundo con Docker

Una aplicación simple en React que muestra un botón que al presionarlo dice "¡Hola Mundo!". La aplicación está containerizada con Docker para facilitar su despliegue y ejecución.

## Descripción

Este proyecto es una demostración básica de una aplicación React con las siguientes características:

- Un botón interactivo que al hacer clic muestra un mensaje
- Estilizado con CSS
- Containerizado con Docker
- Configurado con docker-compose para facilitar el desarrollo

## Requisitos previos

Para ejecutar esta aplicación necesitarás:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)


## Instalación y ejecución


### Ejecutar con Docker

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd react-hola-mundo
   ```

2. Construye y ejecuta el contenedor:
   ```bash
   docker-compose up --build
   ```

3. Abre tu navegador en [http://localhost:80](http://localhost:80)

