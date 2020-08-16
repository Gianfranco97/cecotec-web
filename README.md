# CASO PRÁCTICO 1 - Admin

## Scripts Disponibles

### `yarn fake-server`

Crea un servidor fake API REST (Es utilizado para el login, logout y 'Productos'. Aunque también esta preparado para ser usado en ‘Clientes’). `http://localhost:3010`

### `yarn fake-server-graphql`

Crea un servidor fake API GraphQL (Es utilizado en 'Clientes'. Aunque también esta preparado para ser usado en ‘Productos’). `http://localhost:3011`

### `yarn start`

Ejecutar la aplicación en el modo de desarrollo. <br />
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

La página se recargará si se hace ediciones.
También se podrá ver cualquier Lint error en la consola.

### `yarn test`

Ejecuta los 'smoke' tests y de ‘snapshot’.

### `yarn test:cypress`

Ejecuta los 'End to End' tests en el terminal.

### `yarn test:cypress:open`

Abre el UI de cypress para ejecutar los 'End to End' tests.

### `yarn build`

Construye la aplicación para la producción en la carpeta de build.

### `yarn eject`

**Nota: esta es una operación de una sola dirección. Una vez que se hace `eject`, no se puede volver atrás.**

Este comando eliminará la dependencia de la construcción única del proyecto.
En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en el proyecto para tener un control total sobre ellos. 