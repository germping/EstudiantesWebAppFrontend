# EstudiantesWebAppFrontend

Este proyecto es la interfaz frontend de la aplicación **Estudiantes Web App**, desarrollada con Angular y Angular Material. Permite gestionar estudiantes, profesores y materias en un entorno educativo de manera eficiente y moderna.

## Información del Proyecto

- **Framework:** Angular 17+
- **UI:** Angular Material
- **Lenguaje:** TypeScript
- **Propósito:** Gestión de usuarios (estudiantes, profesores) y materias, autenticación y administración de datos educativos.
- **Backend:** Comunicación vía API RESTful.

## Buenas Prácticas Aplicadas

- **Estructura Modular:** Separación clara de módulos por dominio (`teachers`, `class-subjects`, `user`, `shared`, `material`).
- **Componentización:** Uso de componentes reutilizables y desacoplados para UI y lógica.
- **Servicios Centralizados:** Lógica de negocio y acceso a datos encapsulados en servicios (`TeacherService`, `SharedService`).
- **Reactive Forms:** Formularios robustos y validables usando `FormGroup` y `FormControl`.
- **Gestión de Estado:** Servicios compartidos para manejo de sesión y comunicación entre componentes.
- **Consumo Seguro de APIs:** Uso de `HttpClient` con manejo de errores y tipado fuerte.
- **Autenticación Segura:** Módulo de login con validaciones y almacenamiento seguro de sesión.
- **Buenas Prácticas de Angular:** Uso de Observables, inyección de dependencias, lazy loading y rutas protegidas.
- **Estilo y Accesibilidad:** Angular Material para UI consistente, responsiva y accesible.
- **Control de Versiones:** Uso de Git para control de cambios y colaboración.

## Conceptos Aplicados

### 1. **Angular**
Framework para construir aplicaciones SPA usando TypeScript. Proporciona:
- **Componentes**: Unidades reutilizables de UI.
- **Servicios**: Lógica de negocio y acceso a datos.
- **Módulos**: Organización y agrupación de funcionalidades.
- **Ruteo**: Navegación entre vistas.

### 2. **Angular Material**
Librería de componentes UI basada en Material Design:
- **MatTable**: Tablas dinámicas.
- **MatDialog**: Ventanas modales.
- **MatPaginator**: Paginación.
- **MatFormField, MatInput, MatButton, MatIcon**: Formularios y botones estilizados.

### 3. **Reactive Forms**
Formularios robustos y validables usando `FormGroup` y `FormControl`.

### 4. **Consumo de APIs**
Comunicación con backend mediante servicios Angular (`HttpClient`) para operaciones CRUD.

### 5. **Gestión de Estado y Comunicación**
Servicios compartidos para manejar sesión y compartir información entre componentes.

### 6. **Autenticación**
Módulo de login con formularios reactivos y servicios para autenticar usuarios y guardar la sesión.

## Estructura de Carpetas

- `/src/app/teachers`: Gestión de profesores.
- `/src/app/class-subjects`: Gestión de materias.
- `/src/app/user`: Autenticación de usuarios.
- `/src/app/shared`: Componentes y servicios compartidos.
- `/src/app/material`: Centralización de Angular Material.

## Librerías Principales

- **@angular/core, @angular/common, @angular/forms**: Núcleo de Angular.
- **@angular/material**: Componentes Material Design.
- **rxjs**: Programación reactiva.
- **@angular/router**: Navegación entre vistas.

## Ejecución

Instala dependencias y ejecuta el proyecto:

```sh
npm install
ng serve