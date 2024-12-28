# Proyecto de Talento Tech del Curso FRONT-END

<p align="center">
  <img src="./Imagenes/SAIRCORP.png" alt="SAIRCORP Logo" width="150"/>
</p>

SAIRCORP es un sitio web diseñado para mostrar productos, reseñas y ofrecer una manera fácil para que los usuarios se pongan en contacto con la empresa. El sitio es totalmente responsive y se adapta a dispositivos móviles, tabletas y pantallas grandes, asegurando una experiencia de usuario optimizada en cada resolución.

## Tabla de contenido

<ul>
  <li><a href="#descripción">Descripción</a></li>
  <li><a href="#características">Características</a></li>
  <li><a href="#tecnologías-utilizadas">Tecnologías Utilizadas</a></li>
  <li><a href="#mejoras-recientes">Mejoras Recientes</a></li>
</ul>

## Descripción

Este proyecto fue creado con el objetivo de proporcionar una plataforma en línea para la empresa SAIRCORP, mostrando productos destacados, permitiendo a los clientes leer reseñas y proporcionando información de contacto. SAIRCORP utiliza HTML, CSS y JavaScript para su estructura, funcionalidad y estilo, y emplea íconos de Font Awesome para mejorar la usabilidad del menú.

## Características

- **Página de inicio**: Una vista general de la empresa y su misión.
- **Sección de productos**: Muestra una variedad de productos disponibles en SAIRCORP.
- **Sección de reseñas**: Permite a los usuarios ver opiniones y valoraciones de otros clientes.
- **Carrito de compras**: 
  - Añadir productos al carrito con opciones dinámicas para aumentar o reducir cantidades.
  - Visualización detallada de productos seleccionados con su precio unitario y total.
  - Persistencia de datos usando LocalStorage para mantener el estado del carrito al cambiar de página.
- **Página de pago**: Visualiza los productos seleccionados y muestra un mensaje personalizado según la acción del usuario.
- **Formulario de contacto**: Proporciona un formulario funcional para que los usuarios se pongan en contacto con la empresa.
- **Responsividad**: Diseño adaptado a dispositivos móviles, tabletas y pantallas grandes.

## Tecnologías Utilizadas

- **HTML5**: Estructura y contenido de las páginas.
- **CSS3**: Estilos y diseño responsive.
- **JavaScript**: 
  - Funcionalidad del carrito de compras y mensajes dinámicos.
  - Manejo de eventos y actualización en tiempo real de datos en el DOM.
  - Persistencia de datos usando LocalStorage.
- **Font Awesome**: Íconos para mejorar la experiencia del usuario en el menú y otras secciones.

## Mejoras Recientes

### Funcionalidades
- **Carrito de compras**: Añadida la funcionalidad para eliminar productos del carrito y actualizar el LocalStorage dinámicamente.
- **Página de pago**: 
  - Visualización de productos en filas con imágenes, precios unitarios y totales calculados dinámicamente.
  - Mensaje de estado del pago cuando el carrito está vacío o en desarrollo.
- **Eventos personalizados**: Creado un evento click para el botón "Pagar" que muestra mensajes interactivos según las acciones del usuario.

### Estilo y Diseño
- Actualización de las media queries para mejorar la visualización en dispositivos móviles y tabletas.
- Ajuste de estilos en componentes clave como `.producto-detalle` para asegurar consistencia en diferentes resoluciones.
- Mejoras en el diseño del formulario de contacto y botones interactivos.

### Código
- Limpieza y optimización de funciones JavaScript.
- Añadido soporte para recuperación y actualización de datos almacenados en el LocalStorage.

---

Con estas mejoras, SAIRCORP garantiza una experiencia fluida e intuitiva para sus usuarios, con funcionalidades robustas y diseño profesional.