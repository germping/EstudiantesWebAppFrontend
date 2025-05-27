# EstudiantesWebAppFrontend

Este proyecto es la interfaz frontend de la aplicación **Estudiantes Web App**, desarrollada con Angular y Angular Material. Su objetivo es gestionar estudiantes, profesores y materias en un entorno educativo.

## Conceptos Aplicados

### 1. **Angular**
Framework para construir aplicaciones web SPA (Single Page Application) usando TypeScript. Angular proporciona:
- **Componentes**: Unidades reutilizables de UI (por ejemplo, `ListTeacherComponent`, `ModalTeacherComponent`).
- **Servicios**: Lógica de negocio y acceso a datos (por ejemplo, `TeacherService`, `SharedService`).
- **Módulos**: Organización y agrupación de componentes y servicios.
- **Ruteo**: Navegación entre vistas usando el Router de Angular.

### 2. **Angular Material**
Librería de componentes UI basada en Material Design. Proporciona:
- **MatTable**: Tablas dinámicas para mostrar datos.
- **MatDialog**: Ventanas modales para formularios y confirmaciones.
- **MatPaginator**: Paginación de tablas.
- **MatFormField, MatInput, MatButton, MatIcon**: Elementos de formularios y botones estilizados.

### 3. **Reactive Forms**
Angular Reactive Forms permite crear formularios robustos y validables usando `FormGroup` y `FormControl`. Ejemplo: el formulario de login y los formularios de creación/edición de profesores y materias.

### 4. **Consumo de APIs**
El frontend se comunica con el backend mediante servicios Angular (`HttpClient`) para realizar operaciones CRUD sobre estudiantes, profesores y materias.

### 5. **Gestión de Estado y Comunicación**
Se utilizan servicios compartidos (`SharedService`) para manejar el estado de la sesión y compartir información entre componentes.

### 6. **Autenticación**
El módulo de login utiliza formularios reactivos y servicios para autenticar usuarios y guardar la sesión.

## Estructura de Carpetas

- `/src/app/teachers`: Gestión de profesores (listar, crear, editar).
- `/src/app/class-subjects`: Gestión de materias.
- `/src/app/user`: Módulo de autenticación.
- `/src/app/shared`: Componentes y servicios compartidos.
- `/src/app/material`: Módulo para importar y centralizar Angular Material.

## Librerías Principales

- **@angular/core, @angular/common, @angular/forms**: Núcleo de Angular.
- **@angular/material**: Componentes Material Design.
- **rxjs**: Programación reactiva para manejo de eventos y datos asíncronos.
- **@angular/router**: Navegación entre vistas.

## Ejecución

Instala dependencias y ejecuta el proyecto:

```sh
npm install
ng serve